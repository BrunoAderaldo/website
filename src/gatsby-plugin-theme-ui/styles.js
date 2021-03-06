import { tailwind } from '@theme-ui/presets'

// console.log(tailwind)

const headingStyles = {
  color: 'text.primary',
  fontWeight: 700,
  wordBreak: 'break-word'
}

export default {
  root: {
    ...tailwind.styles.root,
    backgroundColor: 'background.default',
    color: 'text.primary'
  },
  h1: {
    ...tailwind.styles.h1,
    ...headingStyles,
    fontSize: [5, 6, 7]
  },
  h2: {
    ...tailwind.styles.h2,
    ...headingStyles,
    fontSize: [4, 5, 6]
  },
  h3: {
    ...tailwind.styles.h3,
    ...headingStyles,
    fontSize: ['1.875rem', 4, 5],
    lineHeight: ['2.35rem'],
    mb: [25]
  },
  h4: {
    ...tailwind.styles.h4,
    ...headingStyles,
    fontSize: ['1.5rem', 3, 4],
    mb: [10]
  },
  h5: {
    ...tailwind.styles.h5,
    ...headingStyles,
    fontSize: [1, 2, 3]
  },
  h6: {
    ...tailwind.styles.h6,
    ...headingStyles,
    fontSize: 1
  },
  p: {
    ...tailwind.styles.p,
    fontSize: ['1.063rem'],
    fontWeight: 500,
    mt: 0,
    wordBreak: 'break-word'
  }
}
