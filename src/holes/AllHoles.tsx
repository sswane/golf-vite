import { Button, Dialog, DialogActions, DialogTitle, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { westernSkies } from '../courses/western-skies'
import Hole from './Hole'
import { useState } from 'react'
import { players } from '../players'
import Scorecard from '../scorecard/Scorecard'

export default function AllHoles() {
  const [playerState, updatePlayers] = useState(players)
  const [numToOpen, setNumToOpen] = useState(0)
  const [openScorecard, setOpenScorecard] = useState(false)

  const holes = Array.from({ length: 18 }, (_, i) => i + 1)
  const courseName = westernSkies.name

  const openHoleDialog = (h: number) => {
    setNumToOpen(h)
  }

  const closeHoleDialog = () => {
    setNumToOpen(0)
  }

  const showScorecard = () => {
    setOpenScorecard(true)
  }

  return (
    <>
      <Typography variant='h3' margin='20px 0px'>{courseName}</Typography>
      <Grid2 container spacing={2} sx={{ marginBottom: '24px' }}>
        {holes.map((h) => (
          <Grid2 key={h} xs={8} sm={4}>
            <Button variant='contained' sx={{ height: '75px', width: '75px' }} onClick={() => openHoleDialog(h)}>
              <Typography variant='h5'>{h}</Typography>
            </Button>
            <Dialog onClose={closeHoleDialog} open={numToOpen === h}>
              <DialogTitle>Scores</DialogTitle>
              <Hole hole={h} players={playerState} updatePlayers={updatePlayers} />
              <DialogActions>
                <Button variant='contained' sx={{ width: '75px', textAlign: 'center', display: 'flex', margin: '0 auto' }} onClick={closeHoleDialog}>Close</Button>
              </DialogActions>
            </Dialog>
          </Grid2>
        ))}
      </Grid2>
      <Button variant='contained' sx={{ height: '75px', width: '150px', textAlign: 'center', display: 'flex', margin: '0 auto' }} onClick={showScorecard}>Scorecard</Button>
      {openScorecard ? <Scorecard courseName={courseName} players={playerState} openScorecard={openScorecard} holes={holes} setOpenScorecard={setOpenScorecard} /> : <></>}
    </>
  )
}
