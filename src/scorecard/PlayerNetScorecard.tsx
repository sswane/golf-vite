import { Dispatch, SetStateAction } from 'react'
import { Button, Dialog, DialogActions, DialogTitle, Table, TableBody, TableHead, TableRow } from '@mui/material'
import { StyledHeaderCell } from '../styled-components/StyledTable'
import { PlayerType } from '../players/Player'
import Score from './Score'

type PlayerScorecardType = {
  courseName: string
  players: PlayerType[]
  openScorecard: boolean
  holes: number[]
  setOpenScorecard: Dispatch<SetStateAction<boolean>>
}

export default function PlayerNetScorecard({ courseName, players, openScorecard, holes, setOpenScorecard }: PlayerScorecardType) {

  const closeScorecard = () => {
    setOpenScorecard(false)
  }

  return (
    <Dialog open={openScorecard} onClose={closeScorecard}>
      <DialogTitle>Scorecard - {courseName}</DialogTitle>
      <Table>
        <TableHead>
          <TableRow>
            <StyledHeaderCell></StyledHeaderCell>
            {holes.map((h) => (
              <StyledHeaderCell key={h}>{h}</StyledHeaderCell>
            ))}
            <StyledHeaderCell>Total</StyledHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player, i) => (
            <Score key={i} holes={holes} name={player.name} scores={player.netScores} />
          ))}
        </TableBody>
      </Table>
      <DialogActions>
        <Button variant='contained' sx={{ width: '75px', textAlign: 'center', display: 'flex', margin: '0 auto' }} onClick={closeScorecard}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}
