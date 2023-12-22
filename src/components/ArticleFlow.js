import { Box, Card, Stack, Typography } from '@mui/material'
import React from 'react'
import BALL from '../Assests/New UI/Frame 1171275271cr.png'

const ArticleFlow = () => {
  return (
    <>
            <Stack direction={'column'} sx={{boxSizing:'border-box', height:'100%',width:'100%'}}>

                <Card sx={{textAlign: 'center', borderRadius: 4, mx:'3%', py:1, pb:2, border:'1px solid blue'}}>
                    <Typography variant='h6' color={'blue'} sx={{fontWeight:'700'}}>Most Advanced Platform</Typography>
                    <Typography variant='body2' color={'blue'}>For Solar Plant Management & Control</Typography>
                </Card>

                <Box sx={{position:'relative', 
                          display:'flex', 
                          height:'100%', 
                          width:'100%', 
                          boxSizing:'border-box',
                          justifyContent:'center',
                          alignItems:'center'
                          }}>
                        <Box sx={{pt:1}}>
                           <img src={BALL} alt='BALL' />
                        </Box>
                        <Box sx={{
                            position:'absolute', 
                            display:'flex', 
                            height:'100%', 
                            width:'100%', 
                            boxSizing:'border-box',
                            flexDirection:'column',
                            justifyContent:'space-between',
                            py:'22px'
                        }}>
                            <Stack direction={'row'} spacing={1}>
                                <Box sx={{p:2}}>
                                    <Card sx={{p:2, borderRadius:4, mb:1, border:'1px solid blue', boxSizing:'border-box'}}>
                                        <Typography color={'blue'} variant='body1' sx={{fontSize:'0.6rem', fontWeight:'600'}}>
                                            Cloud & Local Dashboard Solution
                                            Comprehensive MobileApp
                                            Alerts & notifications thru Email & SMS
                                            Progressive web application to support mobile, tab, laptop, view
                                            Global Integration with third part platform & API
                                        </Typography>
                                    </Card>
                                    <Typography color={'white'} variant='body1' sx={{fontSize:'0.7rem'}} textAlign={'right'}>Engagement</Typography>
                                </Box>
                                <Box sx={{p:2}}>
                                    <Card sx={{p:2, borderRadius:4, mb:1, border:'1px solid blue', boxSizing:'border-box'}}>
                                        <Typography color={'blue'} variant='body1' sx={{fontSize:'0.6rem', fontWeight:'600'}}>
                                                Cloud & Local Dashboard Solution
                                                Comprehensive MobileApp
                                                Alerts & notifications thru Email & SMS
                                                Progressive web application to support mobile, tab, laptop, view
                                                Global Integration with third part platform & API
                                        </Typography>
                                    </Card>
                                    <Typography color={'white'} variant='body1' sx={{fontSize:'0.7rem'}} textAlign={'left'}>Solutions</Typography>
                                </Box>
                            </Stack>

                            <Stack direction={'row'} spacing={'10px'}>
                                <Box sx={{p:2}}>
                                    <Typography color={'white'} variant='body1' sx={{fontSize:'0.7rem'}} textAlign={'right'}>Engagement</Typography>
                                    <Card sx={{p:2, borderRadius:4, mt:1, border:'1px solid blue', boxSizing:'border-box'}}>
                                        <Typography color={'blue'} variant='body1' sx={{fontSize:'0.6rem', fontWeight:'600'}}>
                                            Cloud & Local Dashboard Solution
                                            Comprehensive MobileApp
                                            Alerts & notifications thru Email & SMS
                                            Progressive web application to support mobile, tab, laptop, view
                                            Global Integration with third part platform & API
                                        </Typography>
                                    </Card>
                                </Box>
                                <Box sx={{p:2}}>
                                    <Typography color={'white'} variant='body1' sx={{fontSize:'0.7rem'}} textAlign={'left'}>Solutions</Typography>
                                    <Card sx={{p:2, borderRadius:4, mt:1, border:'1px solid blue', boxSizing:'border-box'}}>
                                        <Typography color={'blue'} variant='body1' sx={{fontSize:'0.6rem', fontWeight:'600'}}>
                                                Cloud & Local Dashboard Solution
                                                Comprehensive MobileApp
                                                Alerts & notifications thru Email & SMS
                                                Progressive web application to support mobile, tab, laptop, view
                                                Global Integration with third part platform & API
                                        </Typography>
                                    </Card>
                                </Box>
                            </Stack>
                        </Box>
                </Box>

            </Stack>
    </>
  )
}

export default ArticleFlow