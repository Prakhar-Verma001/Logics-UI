import { Box, Card, Divider, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import SL from '../Assests/New UI/ChartPieSlice-d.png'
import ON from '../Assests/New UI/Notifications-On.png'
import LOGO from '../Assests/New UI/logo 2.png'
import W from '../Assests/New UI/WhatsApp Image 2023-10-21 at 11.05.png'

const Headers = () => {
  return (
    <Box>
        <Stack direction={'column'} spacing={1}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} px={1} pt={1}>
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

            <Divider />

            <Grid container boxSizing={'border-box'} justifyContent={'space-between'} sx={{bgcolor:'#C2D9FF', py:'4px'}}>
              <Grid item lg={3} md={6} xs={12} textAlign={'center'} py={{lg:0, xs:'4px'}}>
                <Typography variant='subtitle2' color={'blue'} sx={{fontSize:'0.8rem', fontWeight:'700', p:0.5}}>
                  Industrial Energy Management System
                </Typography>
              </Grid>
              <Grid item lg={3} md={6} xs={12} textAlign={'center'} py={{lg:0, xs:'4px'}}>
                <Typography variant='subtitle2' color={'blue'} sx={{fontSize:'0.8rem', fontWeight:'700', p:0.5}}>
                  Flow Meter & Ground Water Monitoring
                </Typography>
              </Grid>
              <Grid item lg={3} md={6} xs={12} textAlign={'center'} py={{lg:0, xs:'4px'}}>
                <Typography variant='subtitle2' color={'blue'} sx={{fontSize:'0.8rem', fontWeight:'700', p:0.5}}>
                  Smart Metering and DLMS Solution 
                </Typography>
              </Grid>
              <Grid item lg={3} md={6} xs={12} textAlign={'center'} py={{lg:0, xs:'4px'}}>
                <Typography variant='subtitle2' color={'blue'} sx={{fontSize:'0.8rem', fontWeight:'700', p:0.5}}>
                  Industrial Energy Management System
                </Typography>
              </Grid>
            </Grid>

            <Grid container rowGap={1}>
              <Grid item lg={3} md={6} xs={12} p={0.5}>
                <DetailCard
                  text1='Gulati Oil India Pvt Ltd'
                  text2='Plant Capacity : 500.31 kWp'
                />
              </Grid>
              <Grid item lg={3} md={6} xs={12} p={0.5}>
                <DetailCard
                  text1='Gulati Oil India Pvt Ltd'
                  text2='Plant Capacity : 500.31 kWp'
                />
              </Grid>
              <Grid item lg={6} md={12} width={1} pt={0.5} px={0.5}>
                <Box sx={{boxSizing:'border-box', height:1, width:1}}>
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
      <Card sx={{p:2, height:1, boxSizing:'border-box', boxShadow:4, textAlign:{md:'left', xs:'center'}}}>
        <Box>
          <Typography variant='subtitle1' sx={{fontSize:'0.9rem', fontWeight:'700'}}>
              {props.text1}
          </Typography>
          <Typography variant='subtitle1' sx={{fontSize:'0.9rem', fontWeight:'700'}}>
              {props.text2}
          </Typography>
        </Box>  
      </Card>
    </>
  )
}

export {DetailCard}
