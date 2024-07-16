import { players } from './players/index.ts'
import { Button } from '@mui/material'
import { westernSkies } from './courses/western-skies.ts'
import { useState } from 'react'
import Course from './courses/Course.tsx'
import AllHoles from './holes/AllHoles.tsx'
import ChooseTeams from './teams/ChooseTeams.tsx'
import PlayerTable from './players/PlayerTable.tsx'

export default function Home() {
  const [playerState, updatePlayers] = useState(players)
  const [showHoles, setShowHoles] = useState(false)
  const [showChooseTeams, setShowChooseTeams] = useState(false)

  const onBegin = () => {
    setShowChooseTeams(true)
    setShowHoles(true)
  }

  return (
    <>
      <Course {...westernSkies} />
      <PlayerTable players={playerState} />
      <Button variant='contained' onClick={onBegin}>Choose Teams</Button>
      {showChooseTeams ? <ChooseTeams players={playerState} updatePlayers={updatePlayers} showChooseTeams={showChooseTeams} setShowChooseTeams={setShowChooseTeams} /> : <></> }
      {showHoles ? <AllHoles players={playerState} updatePlayers={updatePlayers} /> : <></>}
    </>
  )
}


