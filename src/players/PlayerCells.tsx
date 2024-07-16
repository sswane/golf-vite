import { TableCell } from '@mui/material'
import { PlayerType } from '.'

export default function PlayerCells (player: PlayerType) {

  return (
    <>
      <TableCell>{player.name}</TableCell>
      <TableCell>{player.tees}</TableCell>
      <TableCell>{player.courseHandicap}</TableCell>
    </>
  )
}
