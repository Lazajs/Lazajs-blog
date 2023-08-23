import type { Children } from 'types'
import Paragraph from './Paragraph'
import SecondHeading from './SecondHeading'
import UnorderedList from './UnorderedList'
import Strong from './Strong'
import ExampleImage from './ExampleImage'
import Category from 'components/Post/Category'
import ThirdHeading from './ThirdHeading'

const COMPONENTS = {
  p: ({ children }: Children) => <Paragraph>{children}</Paragraph>,
  h2: ({ children }: Children) => <SecondHeading>{children}</SecondHeading>,
  h3: ({children}: Children) => <ThirdHeading>{children}</ThirdHeading>,
  ul: ({ children }: Children) => <UnorderedList>{children}</UnorderedList>,
  strong: ({ children }: Children) => <Strong>{children}</Strong>,
  ExampleImage,
  Category
}

export default COMPONENTS
