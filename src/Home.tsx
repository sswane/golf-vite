import { players } from './players/index.ts'
import { Button, Table, TableBody, TableHead, TableRow, Typography } from '@mui/material'
import { westernSkies } from './courses/western-skies.ts'
import { StyledHeaderCell, StyledTableRow } from './styled-components/StyledTable.tsx'
import { useState } from 'react'
import Course from './courses/Course.tsx'
import Player from './players/Player'
import AllHoles from './holes/AllHoles.tsx'
import ChooseTeams from './teams/ChooseTeams.tsx'

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
      <Typography variant='h2'>Player Info</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <StyledHeaderCell>Name</StyledHeaderCell>
            <StyledHeaderCell>Tees</StyledHeaderCell>
            <StyledHeaderCell>Course Handicap</StyledHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player, i) => (
            <StyledTableRow key={i}><Player {...player} /></StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <br />
      <Button variant='contained' onClick={onBegin}>Choose Teams</Button>
      {showChooseTeams ? <ChooseTeams players={playerState} updatePlayers={updatePlayers} showChooseTeams={showChooseTeams} setShowChooseTeams={setShowChooseTeams} /> : <></> }
      {showHoles ? <AllHoles players={playerState} updatePlayers={updatePlayers} /> : <></>}
    </>
  )
}
