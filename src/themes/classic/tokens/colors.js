/**
 * Neutrals and Blue are special.
 * They need more variations to properly express all of our UI.
 */
const neutral = {
  N1: '#F9F9FB',
  N2: '#F5F6F7',
  N3: '#EDF0F2',
  N4: '#E4E7EB',
  N5: '#C7CED4',
  N6: '#A6B1BB',
  N7: '#7B8B9A', // Large Text AA
  N8: '#66788A', // Normal Text AA
  N9: '#425A70', // Normal Text AAA
  N10: '#234361' // Normal Text AAA
}

const neutralAlpha = {
  // Transparent variants.
  N1A: 'rgba(67, 90, 111, 0.04)',
  N2A: 'rgba(67, 90, 111, 0.06)',
  N3A: 'rgba(67, 90, 111, 0.09)',
  N4A: 'rgba(67, 90, 111, 0.14)',
  N5A: 'rgba(67, 90, 111, 0.3)',
  N6A: 'rgba(67, 90, 111, 0.47)',
  N7A: 'rgba(67, 90, 111, 0.7)',
  N8A: 'rgba(67, 90, 111, 0.81)'
}

const blue = {
  B1: '#f7f9fd',
  B2: '#f1f7fc',
  B3: '#e9f2fa',
  B4: '#ddebf7',
  B5: '#b7d4ef',
  B6: '#8fbce6',
  B7: '#579ad9', // Large Text AA
  B8: '#3d8bd4', // Normal Text AA
  B9: '#1070ca', // Normal Text AAA
  B10: '#084b8a' // Normal Text AAA
}

const blueAlpha = {
  // Transparent variants.
  B1A: 'rgba(16, 112, 202, 0.04)',
  B2A: 'rgba(16, 112, 202, 0.06)',
  B3A: 'rgba(16, 112, 202, 0.09)',
  B4A: 'rgba(16, 112, 202, 0.14)',
  B5A: 'rgba(16, 112, 202, 0.3)',
  B6A: 'rgba(16, 112, 202, 0.47)',
  B7A: 'rgba(16, 112, 202, 0.7)',
  B8A: 'rgba(16, 112, 202, 0.81)'
}

const palette = {
  neutral: {
    ...neutral,
    lightest: neutral.N1,
    light: neutral.N4,
    base: neutral.N9,
    dark: neutral.N10
  },

  blue: {
    ...blue,
    lightest: blue.B1,
    light: blue.B4,
    base: blue.B9,
    dark: blue.B10
  },

  red: {
    lightest: '#fef6f6',
    light: '#fae2e2',
    base: '#ec4c47',
    dark: '#bf0e08'
  },

  orange: {
    lightest: '#fdf8f3',
    light: '#fae3cd',
    base: '#d9822b',
    dark: '#95591e'
  },

  yellow: {
    lightest: '#fef8e7',
    light: '#fbe6a2',
    base: '#f7d154',
    dark: '#7e6514'
  },

  green: {
    lightest: '#f1faf5',
    light: '#d4eee2',
    base: '#47b881',
    dark: '#00783e'
  },

  teal: {
    lightest: '#f1fbfc',
    light: '#d2eef3',
    base: '#14b5d0',
    dark: '#007489'
  },

  purple: {
    lightest: '#f8f7fc',
    light: '#eae7f8',
    base: '#735dd0',
    dark: '#37248f'
  }
}

const colors = {
  ...palette,

  neutralAlpha,
  blueAlpha,

  tint1: neutral.N1,
  tint2: neutral.N2,
  overlay: neutralAlpha.N7A,

  yellowTint: palette.yellow.lightest,
  greenTint: palette.green.lightest,
  orangeTint: palette.orange.lightest,
  redTint: palette.red.lightest,
  blueTint: palette.blue.lightest,
  purpleTint: palette.purple.lightest,
  tealTint: palette.teal.lightest,

  border: {
    default: neutral.N4,
    muted: neutral.N3
  }
}

export default colors
