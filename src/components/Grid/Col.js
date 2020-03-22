/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function Column({ children, styles }) {
  return <div sx={{ variant: 'grid.column', ...styles }}>{children}</div>
}
