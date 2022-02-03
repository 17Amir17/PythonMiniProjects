import * as React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function getColor(value: number, maxHue = 0, minHue = 100) {
    const hue = value * (maxHue - minHue) + minHue;
    return `hsl(${hue}, 100%, 50%)`;
  }

export default function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress style={{color: getColor(props.value)}} size={100} variant="determinate" {...props}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          sx={{ fontSize: '2rem' }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}