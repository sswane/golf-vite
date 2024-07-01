import { Dispatch, SetStateAction } from 'react'
import { PlayerType } from '../players/Player'
import { Box, Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'

export type TeamType = {
  num: number
  netScores: number[]
}

type ChooseTeamType = {
  players: PlayerType[]
  updatePlayers: Dispatch<SetStateAction<PlayerType[]>>
  showChooseTeams: boolean
  setShowChooseTeams: Dispatch<SetStateAction<boolean>>
}

export default function ChooseTeams({ players, updatePlayers, showChooseTeams, setShowChooseTeams }: ChooseTeamType) {

  const handleChange = (event: SelectChangeEvent, player: PlayerType) => {
    player.team = event.target.value
    updatePlayers(players.map((p: PlayerType) => p.name === player.name ? player : p))
  }

  const closeTeamDialog = () => {
    // validate number of team size equal
    setShowChooseTeams(false)
  }

  return (
    <Dialog onClose={closeTeamDialog} open={showChooseTeams}>
      <DialogTitle>Choose Teams</DialogTitle>
      <Box sx={{ margin: '0 24px 24px 24px', width: 300 }}>
        {players.map((player: PlayerType, i) => (
          <FormControl fullWidth key={i}>
            <InputLabel id='team-select-label'>{player.name}</InputLabel>
            <Select
              labelId='team-select-label'
              id='team-select'
              value={player.team ?? ''}
              label='Team'
              onChange={(event: SelectChangeEvent) => handleChange(event, player)}
              sx={{ marginBottom: '16px' }}
            >
              <MenuItem value={1}>Team One</MenuItem>
              <MenuItem value={2}>Team Two</MenuItem>
            </Select>
          </FormControl>
        ))}
      </Box>
      <DialogActions>
        <Button variant='contained' sx={{ width: '75px', textAlign: 'center', display: 'flex', margin: '0 auto' }} onClick={closeTeamDialog}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}
