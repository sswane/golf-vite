import { Button, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { westernSkies } from '../courses/western-skies'

export default function AllHoles() {
  const holes = Array.from({ length: 18 }, (_, i) => i + 1)
  return (
    <>
      <Typography variant='h3' marginBottom='20px'>{westernSkies.name}</Typography>
      <Grid2 container spacing={2}>
        {holes.map((h) => (
          <Grid2 key={h} xs={8} sm={4}>
            <Button variant='contained' sx={{ height: '100px', width: '100px' }} href={`/holes/${h}`}>
              <Typography variant='h5'>{h}</Typography>
            </Button>
          </Grid2>
        ))}
      </Grid2>
    </>
  )
}
