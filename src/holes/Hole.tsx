import { Dispatch, SetStateAction } from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { westernSkies } from '../courses/western-skies'
import { PlayerType } from '../players/Player'
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

type HoleType = {
  hole: number
  players: PlayerType[]
  updatePlayers: Dispatch<SetStateAction<PlayerType[]>>
}

export default function Hole({ hole, players, updatePlayers }: HoleType) {

  const saveScore = (event: React.ChangeEvent<HTMLInputElement>, player: PlayerType, allowance: number) => {
    const playerScore = Number(event.target.value)
    player.grossScores[hole - 1] = playerScore
    player.netScores[hole - 1] = playerScore - allowance
    updatePlayers(players.map((p) => p.name === player.name ? player : p))
    console.log(`net score - ${player.netScores[hole - 1]}`)
  }

  return (
    <div style={{ margin: '0px 24px 24px 24px' }}>
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
          {players.map((player, i) => {
            const allowance = getHoleAllowance(hole, player.tees, player.courseHandicap)
            return (
              <StyledTableRow key={i}>
                <TableCell>{player.name}</TableCell>
                <TableCell>{allowance}</TableCell>
                <TableCell>
                  <TextField
                    id={`player${i}Score`}
                    label='Player Score'
                    variant='outlined'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => saveScore(event, player, allowance)}
                    defaultValue={player.grossScores[hole - 1]}
                  />
                </TableCell>
                <TableCell>{player.netScores[hole - 1]}</TableCell>
              </StyledTableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
