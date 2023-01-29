import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import './Projetos.css';

export default function Projetos(){
    return(
        <Grid container className='section-projetos'>
            <Grid xs={12} className='section-title'>
                <Box>
                    <Typography>
                        Projetos
                    </Typography>
                </Box>
            </Grid>
            <Grid xs={6}>
                <Box>
                    <Typography>
                        Projetos
                    </Typography>
                </Box>
            </Grid>
            <Grid xs={6}>
                <Box>
                    <Typography>
                        Projetos
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};