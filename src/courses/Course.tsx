import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { StyledHeaderCell, StyledTableRow } from '../styled-components/StyledTable'

export type CourseType = {
  name: string
  tees: string[]
  courseHandicaps: CourseHandicap[]
}

export type CourseHandicap = {
  tees: string[]
  handicap: number[]
  par: number[]
}

export default function Course(course: CourseType) {
  const holeNumbers = Array.from({ length: 18 }, (_, i) => i + 1)
  return (
    <div style={{ marginBottom: '24px' }}>
      <Typography variant='h2'>Course Info</Typography>
      <Typography variant='h4'>{course.name}</Typography>
      {course.courseHandicaps.map((courseHandicap, i) => (
        <div key={i}>
          <Typography variant='h6'>Tees: {courseHandicap.tees.join(', ')}</Typography>
          <TableContainer component={Paper} sx={{ width: '100%', marginBottom: '8px' }}>
            <Table sx={{ minWidth: 200 }}>
              <TableHead>
                <TableRow>
                  <StyledHeaderCell>Hole</StyledHeaderCell>
                  {holeNumbers.map((h, hi) => (
                    <StyledHeaderCell key={hi}>{h}</StyledHeaderCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <TableCell sx={{ fontWeight: 'bold', }}>Handicap</TableCell>
                  {courseHandicap.handicap.map((h, hi) => (
                    <TableCell key={hi}>{h}</TableCell>
                  ))}
                </StyledTableRow>
                <StyledTableRow>
                  <TableCell sx={{ fontWeight: 'bold', }}>Par</TableCell>
                  {courseHandicap.par.map((p, pi) => (
                    <TableCell key={pi}>{p}</TableCell>
                  ))}
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ))}
    </div>
  )
}
