import { TableCell, TableRow, styled } from '@mui/material'

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.primary.main,
    borderBottom: '2px solid black',
  },
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.secondary.light,
    borderBottom: '2px solid black',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

export const StyledHeaderCell = styled(TableCell)(() => ({
  backgroundColor: 'white',
  color: 'black',
  fontWeight: 'bold',
  borderBottom: '3px solid black',
}))
