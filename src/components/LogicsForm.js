import React from 'react'
import {Box, Card, Stack, Typography, TextField, InputLabel, Button} from '@mui/material'
import LOGO from '../Assests/New UI/logo 1logicslogo.png'
import GP from '../Assests/New UI/google-play-store1.png'
import IN from '../Assests/New UI/linLinkedIn.png'

const LogicsForm = () => {
  return (
    <>
        <Card sx={{mx:{md:'15%', sm:'10%', xs:0}, p:4, borderRadius: 4}}>
            <Stack direction={'row'} alignItems={'start'} justifyContent={'space-between'} sx={{mb:2}}>
                <Box>
                    <img src={LOGO} alt='logo' />
                </Box>
                <Box>
                    <Typography variant='h6' sx={{textAlign:'end', fontWeight:'700'}}>Hey,</Typography>
                    <Typography variant='h6' sx={{textAlign:'end', fontWeight:'700'}}>Welcome Back!</Typography>
                    <Typography variant='caption' sx={{textAlign:'end'}}>We are very happy to see you back!</Typography>
                </Box>
            </Stack>

            <Box sx={{mb: 3}}>
                <form>
                    <InputLabel shrink htmlFor='email' sx={{fontWeight:'700'}}>Email</InputLabel>
                    <TextField sx={{width: '100%', mb: 2,
                          ".MuiInputBase-input":{p: 1},
                          ".MuiOutlinedInput-root":{border: '2px black', borderRadius: 2}
                      }} id='email' type='email' placeholder='Your Email'/>

                    <InputLabel shrink htmlFor='password' sx={{fontWeight:'700'}}>Password</InputLabel>
                    <TextField sx={{width: '100%',
                          ".MuiInputBase-input":{p: 1},
                          ".MuiOutlinedInput-root":{border: '2px black', borderRadius: 2}
                      }} id='password' type='password' placeholder='Your Password'/>

                    
                    <Button sx={{width: '100%', borderRadius: 2, mt: 4}} variant='contained' type='submit'>Sign Up</Button>
                </form>         
            </Box>

            <Stack direction={'column'} alignItems={'center'}>
                <Stack direction={'row'} spacing={3} sx={{mb:1}}>
                    <Box textAlign={'center'}>
                        <Typography gutterBottom variant='subtitle2' color={'#7E8B9E'} sx={{fontSize:'0.8rem', fontWeight:'700'}}>Download App</Typography>
                        <Button>
                            <img src={GP} alt='GooglePlay'/>
                        </Button>
                    </Box>
                    <Box textAlign={'center'}>
                        <Typography gutterBottom variant='subtitle2' color={'#7E8B9E'} sx={{fontSize:'0.8rem', fontWeight:'700'}}>Follow us on</Typography>
                        <Button>
                            <img src={IN} alt='LinkedIn'/>
                        </Button>
                    </Box>
                </Stack>
                <Box sx={{mb: 1}}>
                    <Typography textAlign={'center'} variant='caption'>Copyright © 2017<Typography color={'blue'} variant='caption'> Logics PowerAMR [P] Ltd.</Typography></Typography>
                    <br />
                    <Typography gutterBottom variant='caption'>Visit Our Entire Portfolio ©<Typography color={'blue'} variant='caption'> www.poweramr.in</Typography></Typography>
                </Box>
            </Stack>
        </Card>
    </>
  )
}

export default LogicsForm