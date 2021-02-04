/** @jsx jsx */
import { Flex, Box, Text, jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import CTA from "./cta"

export const roadmapPhases = [
  {
    name: `Phase I`,
    due: `Q1 2021`,
    description: ` Launch CCO utilizing the DAOHaus platform, ensuring decentralization and governance as soon as possible.`
  },
  {
    name: `Phase II`,
    due: `Q2 2021`,
    description: ` Launch CCO utilizing the DAOHaus platform, ensuring decentralization and governance as soon as possible.`
  },
  {
    name: `Phase III`,
    due: `Q3 2021`,
    description: ` Launch CCO utilizing the DAOHaus platform, ensuring decentralization and governance as soon as possible.`
  },
  {
    name: `Phase IV`,
    due: `Q4 2021`,
    description: ` Launch CCO utilizing the DAOHaus platform, ensuring decentralization and governance as soon as possible.`
  },
]

type RoadmapPhasesProps = {
  phases: any
}

export const RoadmapPhases = ({ phases }: RoadmapPhasesProps) => (
    <Box sx={{ fontSize: `16px`, textAlign: `center`}}>
      <ul sx={{ml: 0, pl: 0, listStyle: `none`,}}>
        {phases && (
          phases.map((phase,i) => (
            <li key={`phase-${i}`} sx={{pl: 0, textAlign: `left`}}>
              <h3 sx={{
                display: `flex`,
                alignItems: `baseline`,
                justifyContent: `space-between`,

              }}><Text sx={{ fontSize: `display.md` }}>{phase.name}</Text> <Text sx={{ fontSize: `body.sm`, opacity: 0.6 }}>{phase.due}</Text></h3>
              <p>{phase.description}</p>
            </li>
          ))
        )}
      </ul>
      <Box sx={{ mb: 5}}>
        <p sx={{fontSize: `body.sm`, fontWeight: `300`, textAlign: `left`}}>* The Array roadmap is subject to change. Depending on governance proposals, parts of the roadmap may be modified or change in priority.</p>
      </Box>
    </Box>
)
