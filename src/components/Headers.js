import { Box, Card, Divider, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import SL from '../Assests/New UI/ChartPieSlice-d.png'
import ON from '../Assests/New UI/Notifications-On.png'
import LOGO from '../Assests/New UI/logo 2.png'
import W from '../Assests/New UI/WhatsApp Image 2023-10-21 at 11.05.png'

const Headers = () => {
  return (
    <Box>
        <Stack direction={'column'}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} p={1}>
                <Stack direction={'row'} spacing={1} alignItems={'center'}>
                    <img src={SL} alt='slice' />
                    <Typography variant='h6' sx={{fontSize:'1.1rem', fontWeight:'700'}}>Dashborad</Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} spacing={3} display={{md:'flex', xs:'none'}}>
                    <Typography variant='subtitle2' sx={{fontSize:'1rem', fontWeight:'600'}}>Last log time : 21/10/2023</Typography>
                    <Typography variant='subtitle2' sx={{fontSize:'1rem', fontWeight:'600'}}>03:45 AM</Typography>
                    
                    <TextField type='time' sx={{ ".MuiInputBase-input":{p:1},".MuiOutlinedInput-root":{border:'1px black', borderRadius:3} }}/>
                    <img src={ON} alt='Notification'/>
                    <img src={LOGO} alt='LOGO'/>
                </Stack>

                <Stack direction={'row'} alignItems={'center'} spacing={3} display={{md:'none', xs:'flex'}}>
                    <img src={ON} alt='Notification'/>
                    <img src={LOGO} alt='LOGO'/>
                </Stack>

            </Stack>
            <Divider sx={{mb:'5px'}}/>

            <Grid container boxSizing={'border-box'} justifyContent={'space-between'} sx={{bgcolor:'#C2D9FF', px:1, py:1}}>
              <Grid item lg={3} md={6} xs={12} textAlign={'center'} py={{lg:0, xs:'4px'}}>
                <Typography variant='subtitle2' color={'blue'} sx={{fontSize:'0.8rem', fontWeight:'700'}}>
                  Industrial Energy Management System
                </Typography>
              </Grid>
              <Grid item lg={3} md={6} xs={12} textAlign={'center'} py={{lg:0, xs:'4px'}}>
                <Typography variant='subtitle2' color={'blue'} sx={{fontSize:'0.8rem', fontWeight:'700'}}>
                  Flow Meter & Ground Water Monitoring
                </Typography>
              </Grid>
              <Grid item lg={3} md={6} xs={12} textAlign={'center'} py={{lg:0, xs:'4px'}}>
                <Typography variant='subtitle2' color={'blue'} sx={{fontSize:'0.8rem', fontWeight:'700'}}>
                  Smart Metering and DLMS Solution 
                </Typography>
              </Grid>
              <Grid item lg={3} md={6} xs={12} textAlign={'center'} py={{lg:0, xs:'4px'}}>
                <Typography variant='subtitle2' color={'blue'} sx={{fontSize:'0.8rem', fontWeight:'700'}}>
                  Industrial Energy Management System
                </Typography>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item lg={3} md={6} xs={12} p={1} pl={0}>
                <DetailCard
                  text1='Gulati Oil India Pvt Ltd'
                  text2='Plant Capacity : 500.31 kWp'
                />
              </Grid>
              <Grid item lg={3} md={6} xs={12} p={1}>
                <DetailCard
                  text1='Gulati Oil India Pvt Ltd'
                  text2='Plant Capacity : 500.31 kWp'
                />
              </Grid>
              <Grid item lg={6} md={12} width={'100%'} p={1} pr={0}>
                <Box sx={{boxSizing:'border-box'}} width={'100%'} height={'100%'}>
                  <img src={W} alt='WhatsappImage' width={'100%'} height={'100%'} />
                </Box>
              </Grid>
            </Grid>
        </Stack>
    </Box>
  )
}

export default Headers

const DetailCard = (props) => {
  return (
    <>
      <Card sx={{p:2, height:'91%', boxSizing:'border-box', boxShadow:5, textAlign:{md:'left', xs:'center'}}}>
          <Typography variant='subtitle1' sx={{fontSize:'1rem', fontWeight:'700'}}>
              {props.text1}
          </Typography>
          <Typography variant='subtitle1' sx={{fontSize:'1rem', fontWeight:'700'}}>
              {props.text2}
          </Typography>
      </Card>
    </>
  )
}

export {DetailCard}