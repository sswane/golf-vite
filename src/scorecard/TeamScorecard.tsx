import { Dispatch, SetStateAction } from 'react'
import { Button, Dialog, DialogActions, DialogTitle, Table, TableBody, TableHead, TableRow } from '@mui/material'
import { StyledHeaderCell } from '../styled-components/StyledTable'
import { TeamType } from '../teams/ChooseTeams'
import Score from './Score'

export type TeamScorecardType = {
  courseName: string
  teams: TeamType[]
  openScorecard: boolean
  holes: number[]
  setOpenScorecard: Dispatch<SetStateAction<boolean>>
}

export default function TeamScorecard({ courseName, teams, openScorecard, holes, setOpenScorecard }: TeamScorecardType) {
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
          {teams.map((team, i) => (
            <Score key={i} holes={holes} name={`Team ${team.num}`} scores={team.netScores} />
          ))}
        </TableBody>
      </Table>
      <DialogActions>
        <Button variant='contained' sx={{ width: '75px', textAlign: 'center', display: 'flex', margin: '0 auto' }} onClick={closeScorecard}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}
