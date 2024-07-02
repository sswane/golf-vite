import { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'
import { Button, Dialog, DialogActions, DialogTitle, Typography } from '@mui/material'
import { westernSkies } from '../courses/western-skies'
import { PlayerType } from '../players/Player'
import { TeamType } from '../teams/ChooseTeams'
import Grid from '@mui/material/Unstable_Grid2'
import Hole from './Hole'
import Scorecard from '../scorecard/Scorecard'

export type AllHolesType = {
  players: PlayerType[]
  updatePlayers: Dispatch<SetStateAction<PlayerType[]>>
}

export default function AllHoles({ players, updatePlayers }: AllHolesType) {
  const startingTeams: TeamType[] = [{ num: 1, netScores: [] }, { num: 2, netScores: [] }]
  const [numToOpen, setNumToOpen] = useState(0)
  const [teams, setTeams] = useState(startingTeams)

  const holes = Array.from({ length: 18 }, (_, i) => i + 1)
  const courseName = westernSkies.name

  const openHoleDialog = (h: number) => {
    setNumToOpen(h)
  }

  const closeHoleDialog = () => {
    setNumToOpen(0)
  }

  return (
    <>
      <Typography variant='h3' margin='20px 0px'>{courseName}</Typography>
      <Grid columns={18} container spacing={2} sx={{ marginBottom: 4 }}>
        {holes.map((h) => (
          <Grid key={h} xs={18} sm={9} md={6} lg={2} xl={1}>
            <Button variant='contained' sx={{ height: 72, width: 72 }} onClick={() => openHoleDialog(h)}>
              <Typography variant='h5'>{h}</Typography>
            </Button>
            <Dialog onClose={closeHoleDialog} open={numToOpen === h}>
              <DialogTitle>Scores</DialogTitle>
              <Hole hole={h} players={players} updatePlayers={updatePlayers} teams={teams} setTeams={setTeams} />
              <DialogActions>
                <Button variant='contained' sx={{ width: 72, textAlign: 'center', display: 'flex', margin: '0 auto' }} onClick={closeHoleDialog}>Close</Button>
              </DialogActions>
            </Dialog>
          </Grid>
        ))}
      </Grid>
      <Scorecard courseName={courseName} holes={holes} players={players} teams={teams} />
    </>
  )
}
