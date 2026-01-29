# Ideology Matrix

A comprehensive political ideology test featuring 16 political axes and 218 ideologies. This is an extended fork of [8values](https://8values.github.io/) with a significantly expanded axis framework, adaptive three-phase quiz engine, and mechanism-based preference detection.

## Overview

Unlike the original 8values (4 axes), Ideology Matrix measures political positioning across **16 distinct axes**:

### Core Political Axes
- **Equality**: Free Market ↔ Economic Equality
- **Liberty**: State Authority ↔ Civil Liberty
- **Progress**: Traditional ↔ Secular-Progressive
- **Identity**: Nationalist ↔ Cosmopolitan

### Extended Axes
- **Populism**: Pluralist/Elite ↔ Populist/People
- **Intervention**: Non-interventionist ↔ Interventionist
- **Ecology**: Anthropocentric ↔ Ecocentric
- **Power**: Centralized ↔ Decentralized
- **Change**: Gradualist ↔ Revolutionary
- **Human Nature**: Constrained ↔ Unconstrained
- **Means**: Pragmatic ↔ Principled
- **Property**: Private ↔ Commons
- **Secularism**: Religious ↔ Secular
- **Technology**: Skeptic ↔ Enthusiast
- **Welfare**: Targeted ↔ Universal
- **Integration**: Assimilationist ↔ Pluralist

## Features

### Adaptive Three-Phase Quiz Engine
1. **Phase 1 - Core Screening** (25-60 questions)
   - Establishes baseline on all 16 axes
   - Adaptive question selection based on confidence levels
   - Ensures minimum coverage across all dimensions

2. **Phase 2 - Adaptive Discrimination** (15-50 questions)
   - Targets axes where top ideologies differ most
   - Uses variance-weighted question selection
   - Refines ideology matches based on user responses

3. **Phase 3 - Mechanism Questions** (8-30 questions)
   - Detects HOW users prefer to achieve political goals
   - Mechanism-based preference tagging
   - Captures nuanced methodology preferences

### Advanced Features
- **Salience-Weighted Matching**: Ideologies have weighted importance on different axes
- **Response Curve Normalization**: Captures intensity of political conviction
- **Confidence-Based Estimation**: Real-time quiz length prediction
- **Dark/Light Theme Toggle**: System preference detection with manual override
- **Responsive Design**: Mobile-friendly interface with accessibility support
- **Shareable Results**: Generate summary images for social media

## Architecture

### Core Files
- **`adaptive.js`**: Three-phase adaptive quiz engine with confidence calculations
- **`ideologies.js`**: 218 ideologies with 16-axis profiles and salience weights
- **`questions.js`**: ~100 core questions with axis loadings and reliability scores
- **`mechanism-questions.js`**: Mechanism-based preference questions
- **`quiz.html`**: Quiz interface and question display
- **`results.html`**: Results visualization with ideology matching

### Styling
- **`style.css`**: Comprehensive design system with 16 axis color mappings
- **`theme.js`**: Dark/light mode with system preference detection
- **`icons/`**: SVG icons for axis visualization

## Installation & Development

```bash
# Clone the repository
git clone https://github.com/yourusername/ideology-matrix.git
cd ideology-matrix

# Open in browser
open index.html
```

No build process or dependencies required - pure HTML/CSS/JavaScript.

## Quiz Scoring Algorithm

### Response Curve
User responses are normalized using a power curve: `response^1.3`

This captures the intensity of conviction - moderate agreement (0.5) contributes less than strong agreement (1.0).

### Axis Scoring
```
axis_score = Σ(weight × loading_type_multiplier × reliability × curved_response)
```

Where:
- **weight**: Question's loading on this axis (-1 to +1)
- **loading_type_multiplier**: primary=1.0, secondary=0.6, tertiary=0.3
- **reliability**: Question quality score (0-1)

### Confidence Calculation
Confidence is weighted by response magnitude, consistency, and reliability:
- Response magnitude factor
- Consistency bonus (aligned responses increase confidence)
- Reliability-weighted average
- Minimum questions requirement per axis

### Ideology Matching
Distance uses salience-weighted Euclidean distance:
```
distance = √(Σ weight × (user_axis - ideology_axis)²) / Σ weight
```

Salience weights reflect how definitional each axis is to an ideology (0-1 scale).

## Data Structure

### Ideology Profile
```javascript
{
  name: "String",
  description: "String",
  stats: {
    eqlt: 0-100,    // 16 axes
    lbrt: 0-100,
    // ... etc
  },
  salience: {
    eqlt: 0-1,      // Importance weight for each axis
    lbrt: 0-1,
    // ... etc
  },
  mechanism: {
    tags: ["tag1", "tag2"],    // Optional mechanism preferences
    description: "String"
  }
}
```

### Question Profile
```javascript
{
  id: "String",
  text: "Statement or question",
  type: "standard" | "mechanism",
  reliability: 0-1,
  loadings: {
    eqlt: { type: "primary|secondary|tertiary", weight: -1 to 1 },
    // ... other axes
  },
  phase1Priority: 1|2,        // For core screening phase
  options: [...],             // Mechanism question options
  trigger: { axis, threshold, direction }  // Phase 3 triggers
}
```

## Contributing

This is an active research project. Contributions welcome:
- Ideology profile improvements
- Question calibration and new questions
- Axis definitions and research
- Bug reports and UI improvements

Please ensure changes don't alter the political science integrity of the model.

## Licensing

This project is licensed under the **MIT License** - see LICENSE file for details.

### Attribution
- **Original Project**: [8values](https://8values.github.io/) by the 8values team
- **License**: MIT License
- **Extensions**: This fork adds 12 additional axes, 218 ideologies, adaptive engine, and mechanism questions

## Citation

If you use this in research or academic work, please cite:

```
Ideology Matrix (2024). An extended political compass framework.
Based on 8values by the 8values team.
https://github.com/yourusername/ideology-matrix
```

## Acknowledgments

- [8values](https://8values.github.io/) for the original four-axis framework
- Political science research on multi-dimensional ideology measurement
- Contributors and testers

## Technical Notes

### Recent Improvements
- Fixed array bounds checking in adaptive engine
- Improved userScores initialization to prevent undefined access
- Type consistency in phase transitions (numeric phase numbering)
- CSS cleanup and style standardization
- Removed memory leak in theme preference listener
- Extracted inline styles to CSS classes

### Performance
- Quiz typically runs 60-140 questions
- Adaptive algorithm predicts completion in real-time
- Confidence-based phase transitions ensure quality over speed
- Canvas-based image generation for social sharing

### Accessibility
- WCAG AA contrast compliance
- Keyboard navigation throughout
- Screen reader support with semantic HTML
- Skip links for rapid navigation
- High-contrast mode support

---

**Note**: This is a political compass test designed for educational and self-reflection purposes. Real-world political ideology is more complex, historically contested, and often overlaps. These results suggest general alignment, not precise categorization. Individual political beliefs exist on spectrums and shift over time.
