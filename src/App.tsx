import './App.css'
import Player from './players/Player'
import Course from './courses/Course.tsx'
import { steph, becca, rob, arefeen } from './players/index.ts'
import { Button, Table, TableBody, TableHead, TableRow, ThemeProvider, Typography } from '@mui/material'
import { westernSkies } from './courses/western-skies.ts'
import { StyledHeaderCell, StyledTableRow } from './styled-components/StyledTable.tsx'
import { theme } from './theme/original.ts'

function App() {

  return (
    <ThemeProvider theme={theme}>
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
          <StyledTableRow><Player {...rob} /></StyledTableRow>
          <StyledTableRow><Player {...steph} /></StyledTableRow>
          <StyledTableRow><Player {...arefeen} /></StyledTableRow>
          <StyledTableRow><Player {...becca} /></StyledTableRow>
        </TableBody>
      </Table>
      <br />
      <Button variant='contained'>Begin</Button>
    </ThemeProvider>
  )
}

export default App
