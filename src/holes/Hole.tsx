import { Dispatch, SetStateAction } from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { StyledHeaderCell, StyledTableRow } from '../styled-components/StyledTable'
import { westernSkies } from '../courses/western-skies'
import { PlayerType } from '../players/Player'
import { TeamType } from '../teams/ChooseTeams'

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
  teams: TeamType[]
  setTeams: Dispatch<SetStateAction<TeamType[]>>
}

export default function Hole({ hole, players, updatePlayers, teams, setTeams }: HoleType) {

  const saveScore = (event: React.ChangeEvent<HTMLInputElement>, player: PlayerType, allowance: number) => {
    const playerScore = Number(event.target.value)
    const netScore = playerScore - allowance
    player.grossScores[hole - 1] = playerScore
    player.netScores[hole - 1] = netScore
    updatePlayers(players.map((p) => p.name === player.name ? player : p))
    const teamScores = teams.map((team) => {
      if (Number(player.team) === team.num) {
        if (netScore > team.netScores[hole - 1]) {
          return team
        }
        team.netScores[hole - 1] = netScore
      }
      return team
    })
    setTeams(teamScores)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant='h3'>Hole: {hole}</Typography>
      {westernSkies.courseHandicaps.map((ch, i) => (
        <Typography key={i} variant='h6'>
          Tees: {ch.tees.join(', ')} Par: {ch.par[hole - 1]} Handicap: {ch.handicap[hole - 1]}</Typography>
      ))}
      <Table>
        <TableHead>
          <TableRow>
            <StyledHeaderCell>Player</StyledHeaderCell>
            <StyledHeaderCell>Team</StyledHeaderCell>
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
                <TableCell>{`Team ${player.team}`}</TableCell>
                <TableCell>{allowance}</TableCell>
                <TableCell>
                  <TextField
                    id={`player${i}Score`}
                    label='Player Score'
                    variant='outlined'
                    inputProps={{ inputMode: 'numeric' }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => saveScore(event, player, allowance)}
                    defaultValue={player.grossScores[hole - 1]}
                    sx={{ width: 120 }}
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
