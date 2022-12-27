import Paragraph from './Paragraph'
import type { Children } from 'types'

const COMPONENTS = {
  p: ({ children }: Children) => <Paragraph>{children}</Paragraph>
}

export default COMPONENTS
