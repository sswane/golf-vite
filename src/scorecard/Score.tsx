import { TableCell } from '@mui/material'
import { BoldCell, StyledTableRow } from '../styled-components/StyledTable'

type ScoreType = {
  holes: number[]
  name: string
  scores: number[]
}

export default function Score({ holes, name, scores }: ScoreType) {
  return (
    <StyledTableRow>
      <BoldCell>{name}</BoldCell>
      {holes.map((h) => (
        <TableCell key={h}>{scores[h - 1]}</TableCell>
      ))}
      <BoldCell>{scores.reduce((sum, s) => sum + s, 0)}</BoldCell>
    </StyledTableRow>
  )
}
