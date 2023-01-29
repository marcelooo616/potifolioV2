import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import './SobreMim.css';

export default function SobreMim(){
    return(
        <Grid container>
            <Grid xs={12} className='section-title'>
                <Box>
                    <Typography>
                        Eu.
                    </Typography>
                </Box>
            </Grid>
            <Grid xs={6} className='section-conteudo'>
                <Box>
                    <Typography>
                        Descriçõa sobre me
                    </Typography>
                </Box>
            </Grid>
            <Grid xs={6} className='section-conteudo'>
                <Box>
                    <img src='https://i.imgur.com/byanqOq.gif' alt=''/>
                </Box>
            </Grid>
        </Grid>

    );
};