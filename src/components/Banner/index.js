import './Banner.css';
import { Grid, Typography } from '@mui/material';
export default function Banner(){

    const skill = [
        {link:'https://i.imgur.com/nBGy4zq.gif'},
        {link:'https://i.imgur.com/wW62sSR.gif'},
        {link:'https://i.imgur.com/yLt4cHI.gif'}
        
    ]
        
    
    return(
        
        <Grid container className="banner-container">
            <Grid className="gradiente ">
                <Grid xs="12" className='section-name'>
                    <Typography className="nome">Marcelo Nascimento|</Typography>
                </Grid>
                <Grid xs="12"  className='section-icons'>
                    {skill.map((item) => {
                        return(
                            <img src={item.link}/>
                        )
                        
                    })}
                </Grid>
                <Grid xs={3} className='section-icons '>
                    <img className='ws' src='https://i.imgur.com/b5iFcdo.png' alt='whatsaap'/>
                    <span>Contato</span>
                </Grid>
            </Grid>
        </Grid>
        
    )
}