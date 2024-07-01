import { useState } from 'react'
import { PlayerType } from '../players/Player'
import { TeamType } from '../teams/ChooseTeams'
import { Button } from '@mui/material'
import PlayerNetScorecard from './PlayerNetScorecard'
import TeamScorecard from './TeamScorecard'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

type ScorecardType = {
  courseName: string
  players: PlayerType[]
  holes: number[]
  teams: TeamType[]
}

export default function Scorecard({ courseName, holes, players, teams }: ScorecardType) {
  const [openPlayerNet, setOpenPlayerNet] = useState(false)
  const [openTeam, setOpenTeam] = useState(false)
  const buttonStyles = { height: 72, width: 175, textAlign: 'center', display: 'flex', margin: '0 auto' }

  const handlePlayerNet = () => {
    setOpenPlayerNet(true)
  }

  const handleTeam = () => {
    setOpenTeam(true)
  }

  return (
    <Grid2 container>
      <Button variant='contained' sx={buttonStyles} onClick={handlePlayerNet}>Player Net Scorecard</Button>
      <Button variant='contained' sx={buttonStyles} onClick={handleTeam}>Team Net Scorecard</Button>
      {openPlayerNet ? <PlayerNetScorecard courseName={courseName} players={players} openScorecard={openPlayerNet} holes={holes} setOpenScorecard={setOpenPlayerNet} /> : <></>}
      {openTeam ? <TeamScorecard courseName={courseName} teams={teams} openScorecard={openTeam} holes={holes} setOpenScorecard={setOpenTeam} /> : <></>}
    </Grid2>
  )
}
