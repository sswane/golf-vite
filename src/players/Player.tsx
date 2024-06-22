import { TableCell } from '@mui/material'

export type PlayerType = {
  name: string
  course: string
  tees: string
  courseHandicap: number
  grossScores: number[]
  netScores: number[]
}

export default function Player (player: PlayerType) {

  return (
    <>
      <TableCell>{player.name}</TableCell>
      <TableCell>{player.tees}</TableCell>
      <TableCell>{player.courseHandicap}</TableCell>
    </>
  )
}
