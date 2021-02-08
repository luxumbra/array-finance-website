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
    description: `Launch CCO utilizing the DAOHaus platform, ensuring decentralization and governance as soon as possible.`
  },
  {
    name: `Phase II`,
    due: `Q2 2021`,
    description: `Launch v1 of the ArrayDAO and transition the CCO to the custom-built ArrayDAO, with several introductory vaults. Transition from the CCO to the Array DAO and bonding curve.
    `
  },
  {
    name: `Phase III`,
    due: `Q3 2021`,
    description: `Launch the first “on-rails” Array builder, using risk tolerance as the variable. Release more Array vaults and the Array AMM, kickstarting the Array insurance mechanism.

    `
  },
  {
    name: `Phase IV`,
    due: `Q4 2021`,
    description: `Launch v2 of the Array builder, allowing rapid deployment of user-created Arrays, with a migration tool for v1 Arrays.
    `
  },
]

type RoadmapPhasesProps = {
  phases: any
}

export const RoadmapPhases = ({ phases }: RoadmapPhasesProps) => (
    <Box sx={{textAlign: `center`}}>
      <ul sx={{ml: 0, pl: 0, listStyle: `none`,}}>
        {phases && (
          phases.map((phase,i) => (
            <li key={`phase-${i}`} sx={{pl: 0, textAlign: `left`, mb: [4, 5]}}>
              <h3 sx={{
                display: `flex`,
                alignItems: `baseline`,
                justifyContent: `space-between`,
              }}><Text sx={{ fontSize:[`display.sm`,`display.md`,`display.md`, `display.lg`] }}>{phase.name}</Text> <Text sx={{ fontSize: [`body.xs`,`body.sm`,`body.md`, `body.lg`], opacity: 0.6 }}>{phase.due}</Text></h3>
              <p sx={{fontSize: [`body.xs`,`body.sm`,`body.sm`, `body.lg`], width: [`100%`, `70%`]}}>{phase.description}</p>
            </li>
          ))
        )}
      </ul>
      <Box sx={{ my: 5}}>
        <p sx={{fontSize: [`body.xs`, `body.xs`,`body.xs`,`body.sm`], fontStyle: `italic`, fontWeight: `300`, textAlign: `left`, pr: [0, 0, 5, 0]}}>* The Array roadmap is subject to change. Depending on governance proposals, parts of the roadmap may be modified or change in priority.</p>
      </Box>
    </Box>
)
