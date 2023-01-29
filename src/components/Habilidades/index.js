import { Box, Grid, Typography } from '@mui/material';
import './Habilidades.css';

export default function Habilidades(){
    return(
        <Grid container className='section-habilidades'>
        <Grid xs={12} className='section-title'>
            <Box>
                <Typography>
                    Habilidades
                </Typography>
            </Box>
        </Grid>
        <Grid xs={6}>
            <Box>
                <Typography>
                    Habilidades
                </Typography>
            </Box>
        </Grid>
        <Grid xs={6}>
            <Box>
                <Typography>
                    Habilidades
                </Typography>
            </Box>
        </Grid>
    </Grid>
    );
};