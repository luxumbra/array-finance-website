/** @jsx jsx */
import { Box, jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore

type PageSectionProps = {
  children: React.ReactNode
}


const PageSection = ({ children }) => (
  <Box as="div">
    <Inner>
      {children}
    </Inner>
  </Box>
)

export default PageSection
