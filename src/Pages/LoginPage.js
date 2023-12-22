import { Box, Card, Grid, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import LogicsForm from '../components/LogicsForm'
import ArticleFlow from '../components/ArticleFlow'
import SOL from '../Assests/New UI/solar-panel-close-up 1soler.png'
const LoginPage = () => {
  return (
    <div style={{display:'flex', 
                 flexDirection:'column',
                 alignItems: 'center',
                 position: 'relative'
                 }}>
                
                <img src={SOL} alt='SOL' width={'100%'} />
                <Stack direction={'column'} alignItems={'center'} spacing={{lg:10,md:5,xs:3}} sx={{
                    position:'absolute',
                    boxSizing:'border-box',
                    width:'100%',
                    mt: 10
                }}>

                    <Grid container sx={{boxSizing: 'border-box', width:{sm:'80%',xs:'100%'}}}>
                        <Grid xs={12} lg={6} item>
                            <LogicsForm />
                        </Grid>
                         <Grid lg={6} item display={{lg:'grid', xs:'none'}} sx={{pr:5, pt:1}}>
                            <ArticleFlow />
                        </Grid>
                    </Grid>

                    <Card sx={{boxSizing: 'border-box', width:{sm:'80%',xs:'100%'}, borderRadius:3}}>
                        <Grid container>
                            <Grid item  lg={3} md={6} xs={12} boxSizing={'border-box'} textAlign={'center'} width={'100%'}>
                                <Comp1 texts='Industrial Energy Management System' />
                            </Grid>
                            <Grid item lg={3} md={6} xs={12} boxSizing={'border-box'} textAlign={'center'} width={'100%'}>
                                <Comp1 texts=' Flow Meter & Ground Water Monitoring' />
                            </Grid>
                            <Grid item lg={3} md={6} xs={12} boxSizing={'border-box'} textAlign={'center'} width={'100%'}>
                                <Comp1 texts='Smart Metering and DLMS Solution' />
                            </Grid>
                            <Grid item lg={3} md={6} xs={12} boxSizing={'border-box'} textAlign={'center'} width={'100%'}>
                                <Comp1 texts='Industrial Energy Management System' />
                            </Grid>
                        </Grid>
                    </Card>
                    <Card sx={{width:'100%'}}>
                    <Grid container width={'100%'}>
                        <Grid item sx={{bgcolor:'blue'}} lg={1} display={{lg:'grid', xs:'none'}} textAlign={'center'}>
                            <Typography variant='caption' color={'white'}>Power AMR in</Typography>
                            <Typography color={'white'} variant='h5' sx={{fontWeight:'700'}}>NEWS</Typography>
                        </Grid>
                        <Grid item lg={11} xs={12} textAlign={'center'} px={1}>
                            <Typography color={'blue'} variant='subtitle2' sx={{fontSize:'0.8rem', fontWeight:'700', py:2}}>
                            are all in one Controller | Logics PowerAMR reaches to 10+ countries across the globe | Logics PowerAMR introduces LoRa based communication system | Logics PowerAMR reaches to 10+ countries across the globe
                            </Typography>
                          </Grid>
                        </Grid>
                    </Card>
                </Stack>
    </div>
  )
}

const Comp1 = (props) => {
  return (
    <>
        <Typography color={'blue'} variant='subtitle2' sx={{fontSize:'0.8rem', fontWeight:'700', py:2}}>
            <Link href='#'>{props.texts}</Link>
        </Typography>
    </>
  )
}

export {Comp1}
export default LoginPage