/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function Row({ children, styles }) {
  return <div sx={{ variant: 'grid.row', ...styles }}>{children}</div>
}
