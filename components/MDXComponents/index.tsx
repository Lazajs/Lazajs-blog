import type { Children } from 'types'
import Paragraph from './Paragraph'
import SecondHeading from './SecondHeading'
import UnorderedList from './UnorderedList'
import Strong from './Strong'
import ExampleImage from './ExampleImage'
import Category from 'pages/components/Post/Category'

const COMPONENTS = {
  p: ({ children }: Children) => <Paragraph>{children}</Paragraph>,
  h2: ({ children }: Children) => <SecondHeading>{children}</SecondHeading>,
  ul: ({ children }: Children) => <UnorderedList>{children}</UnorderedList>,
  strong: ({ children }: Children) => <Strong>{children}</Strong>,
  ExampleImage,
  Category
}

export default COMPONENTS
