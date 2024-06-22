import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { westernSkies } from '../courses/western-skies'
import { players } from '../players'
import { useParams } from 'react-router-dom'
import { StyledHeaderCell, StyledTableRow } from '../styled-components/StyledTable'

const getHoleAllowance = (hole: number, tees: string, playerHandicap: number) => {
  const courseHandicap = westernSkies.courseHandicaps.find((ch) => {
    return ch.tees.includes(tees)
  })
  if (!courseHandicap) {
    throw new Error('Could not find course handicap from player\'s tees')
  }
  const holeHandicap = courseHandicap.handicap[hole - 1]
  // TODO: refactor - currently restricted to players with handicaps <= 36
  const allowed = playerHandicap >= holeHandicap ? 1 : 0
  const additional = playerHandicap > 18 && playerHandicap % 18 >= holeHandicap ? 1 : 0

  return allowed + additional
}

export default function Hole() {
  let { number } = useParams()
  const hole = Number(number)

  return (
    <>
      <Typography variant='h3'>Hole: {hole}</Typography>
      {westernSkies.courseHandicaps.map((ch, i) => (
        <Typography key={i} variant='h6'>
          Tees: {ch.tees.join(', ')} Par: {ch.par[hole - 1]} Handicap: {ch.handicap[hole - 1]}</Typography>
      ))}
      <Table>
        <TableHead>
          <TableRow>
            <StyledHeaderCell>Player</StyledHeaderCell>
            <StyledHeaderCell>Handicap Allowance</StyledHeaderCell>
            <StyledHeaderCell>Score</StyledHeaderCell>
            <StyledHeaderCell>Net Score</StyledHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player, i) => (
            <StyledTableRow key={i}>
              <TableCell>{player.name}</TableCell>
              <TableCell>{getHoleAllowance(hole, player.tees, player.courseHandicap)}</TableCell>
              <TableCell>insert score</TableCell>
              <TableCell>calculate score</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
