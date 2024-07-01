import { TableCell, TableRow, useTheme } from '@mui/material'
import { BoldCell } from '../styled-components/StyledTable'

type ScoreType = {
  holes: number[]
  scores: number[]
  team?: number
}

export default function Score({ holes, scores, team }: ScoreType) {
  const theme = useTheme()
  return (
    <TableRow sx={{
      backgroundColor: team === 1 ? theme.palette.primary.main : theme.palette.secondary.light,
      borderBottom: '2px solid black',
    }}>
      <BoldCell>Team {team}</BoldCell>
      {holes.map((h) => (
        <TableCell key={h}>{scores[h - 1]}</TableCell>
      ))}
      <BoldCell>{scores.reduce((sum, s) => sum + s, 0)}</BoldCell>
    </TableRow>
  )
}
