import { Paper, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { StyledHeaderCell, StyledTableRow } from '../styled-components/StyledTable.tsx'
import { PlayerType } from './index.ts'
import PlayerCells from './PlayerCells.tsx'

export type PlayerTableType = {
  players: PlayerType[]
}

export default function PlayerTable({ players }: PlayerTableType) {
  return (
    <div style={{ marginBottom: '24px' }}>
      <Typography variant='h2'>Player Info</Typography>
      <TableContainer component={Paper} sx={{ width: '100%' }}>
        <Table sx={{ minWidth: 200 }}>
          <TableHead>
            <TableRow>
              <StyledHeaderCell>Name</StyledHeaderCell>
              <StyledHeaderCell>Tees</StyledHeaderCell>
              <StyledHeaderCell>Course Handicap</StyledHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player, i) => (
              <StyledTableRow key={i}><PlayerCells {...player} /></StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
