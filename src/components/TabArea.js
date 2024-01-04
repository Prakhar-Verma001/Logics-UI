import { Box, Button, Card, Grid, IconButton, Stack, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import Cal from '../Assests/New UI/Calender-Date.png'
import Cloud from '../Assests/New UI/Cloud.png'
import Temp from '../Assests/New UI/Themomether.png'
import Drop from '../Assests/New UI/Droplet.png'
import ArchT from '../Assests/New UI/Group 1171275067ArchT.png'
import CalB from '../Assests/New UI/CalenderblackCal.png'
import Refesh from '../Assests/New UI/Frame 1171275303Refresh.png'
import Scan from '../Assests/New UI/ExpandScan.png'
import SET from '../Assests/New UI/Frame 1171275302SET.png'
import Graph from '../Assests/New UI/Frame 1171275064Graph.png'
import Indi from '../Assests/New UI/Frame 1171275297Indi.png'
import RainBow from '../Assests/New UI/Frame 1171275298RainBow.png'
import Blue from '../Assests/New UI/Frame 1171275322BlueGraph.png'
import BarGraph from '../Assests/New UI/Frame 1171275299BarGraph.png'
import Green from '../Assests/New UI/Frame 1171275325NewGreen.png'
import BigGreen from '../Assests/New UI/Frame 1171275325BigGreenGraph.png'
import ID from '../Assests/New UI/Frame 1171275402IDCard.png'

const TabArea = () => {

    const [value, setValue] = useState(0);

    const handleTabs = (e, val) => {
        setValue(val);
    }

  return (
    <Box mx={{lg:0, xs:1}}>
        <Stack direction={'row'} justifyContent={{md:'right', xs:'center'}} mb={1}>
            <Tabs value={value} onChange={handleTabs}>
                <Tab label='Tab 1' />
                <Tab label='Tab 2' />
                <Tab label='Tab 3' />
            </Tabs>
        </Stack>
        <Stack direction={{lg:'row', xs:'column'}} spacing={1} alignItems={'center'} p={1}
        justifyContent={'space-between'} sx={{border: '1px solid black', borderRadius:2}}>
                <WeatherItems src={Cal} texts='10 : 27 AM Saturday, October 21, 2023' />
                <WeatherItems src={Cloud} texts='Current Weather' />
                <WeatherItems src={Temp} texts='Todays AVG PR : 21 Oct 2023' />
                <WeatherItems src={Temp} texts='Temperature : 25.4C' />
                <WeatherItems src={Drop} texts='Humidity : 36%' />
        </Stack>
        <TabPanels value={value} index={0}><WeatherChart /></TabPanels>
        <TabPanels value={value} index={1}><EnergyGraph /></TabPanels>
        <TabPanels value={value} index={2}><EnergyDetails /></TabPanels>
    </Box>
  )
}

const TabPanels = (props) => {
  return (
    <>
    {
        props.value === props.index && (<Box py={1}>{props.children}</Box>)
    }
    </>
  )
}

const WeatherChart = () => {
  return (
    <>
        <Stack direction={'column'} spacing={2} mb={2}>

            

            <Grid container height={'100%'} rowGap={2}>
                <Grid item lg={4} xs={12}>
                    <Card sx={{p:1, display:'flex', alignItems:'center', justifyContent:'center', height:'100%' ,boxSizing:'border-box', boxShadow:3}}>
                        <img src={ArchT} alt='Architecture' />
                    </Card>
                </Grid>
                <Grid item lg={8} xs={12}>
                    <Stack direction={'column'} spacing={1} justifyContent={'space-between'} sx={{height:'100%', boxSizing:'border-box', ml:{lg:1, xs:0}}}>
                        <Card sx={{boxShadow:3}}>
                            <CapacityStack />
                        </Card>
                        <Card sx={{boxShadow:3, flexGrow:1}}>
                            <Stack direction={{md:'row', xs:'column'}} p={1.5} spacing={2} py={2} justifyContent={'space-evenly'} alignItems={'center'} sx={{width:'100%', boxSizing:'border-box'}}>
                                <img src={Graph} alt='Graph' width={'100%'}/>
                                <img src={Indi} width={'20%'} alt='Indicater'/>
                            </Stack>
                        </Card>
                    </Stack>
                </Grid>
            </Grid>

            <Grid container height={'100%'} rowGap={2}>
                <Grid item lg={4} xs={12}>
                    <Stack direction={'column'} spacing={1} justifyContent={'space-between'} sx={{height:'100%', boxSizing:'border-box'}}>

                            <Card sx={{boxShadow:3, boxSizing:'border-box', py:'2px'}}>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant='subtitle2' sx={{fontSize:'1rem', fontWeight:'700', p:1}}>Inverter Wise Capacity [KWp]</Typography>
                                    <Stack direction={'row'} alignItems={'center'} spacing={'4px'}>
                                        <IconButton><img src={Scan} alt='Scanner'/></IconButton>
                                        <IconButton sx={{p:0}}><img src={SET} alt='Setting'/></IconButton>
                                    </Stack>
                                </Stack>
                            </Card>

                            <Card sx={{boxShadow:3, height:'85%', boxSizing:'border-box', p:2, flexGrow:1}}>
                                <Stack direction={'column'} spacing={2} width={1} alignItems={'center'} justifyContent={'space-between'} sx={{height:'100%', boxSizing:'border-box'}}>    
                                    <Typography variant='subtitle2' sx={{fontSize:'1rem', fontWeight:'700'}}>Capacity [KWp]</Typography>
                                    <img src={RainBow} alt='RainBow' width={'100%'}/>    
                                </Stack>
                            </Card>
                    </Stack>
                </Grid>

                <Grid item lg={8} xs={12}>
                    <Stack direction={'column'} spacing={1} justifyContent={'space-between'} sx={{height:'100%', boxSizing:'border-box', ml:{lg:1, xs:0}}}>
                        <Card sx={{boxShadow:3}}>
                            <CapacityStack />
                        </Card>
                        <Card sx={{boxShadow:3, p:3}}>
                            <img src={Blue} alt='Blue Graph' width={'100%'} />
                        </Card>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    </>
  )
}

const CapacityStack = () => {
    return (
        <>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} py={'2px'}>
                <Typography variant='subtitle2' sx={{fontSize:'1rem', fontWeight:'700', p:1}}>Inverter Wise Capacity [KWp]</Typography>
                
                <Stack direction={'row'} alignItems={'center'} spacing={'10px'} display={{md:'flex', xs:'none'}}>
                    <IconButton><img src={CalB} alt='Calander Icon' /></IconButton>
                    <Card sx={{border: '1px black', borderRadius:5, px:3, py:'2px', boxShadow:3}}>
                        <Typography variant='subtitle1' sx={{fontSize:'0.9rem', fontWeight:'300'}}>January</Typography>
                    </Card>
                    <Typography variant='subtitle1' sx={{fontSize:'1rem', fontWeight:'600'}}>to</Typography>
                    <Card sx={{border: '1px black', borderRadius:5, px:3, py:'2px', boxShadow:3}}>
                        <Typography variant='subtitle1' sx={{fontSize:'0.9rem', fontWeight:'300'}}>August</Typography>
                    </Card>
                    <IconButton><img src={Refesh} alt='refresh' /></IconButton>
                </Stack>
                
                <Stack direction={'row'} alignItems={'center'} spacing={'4px'}>
                    <IconButton><img src={Scan} alt='Scanner'/></IconButton>
                    <IconButton sx={{p:0}}><img src={SET} alt='Setting'/></IconButton>
                </Stack>
            </Stack>
        </>
    )
}

const WeatherItems = (props) => {
    return (
      <>
        <Button sx={{p:0.5}}>
            <Stack direction={'row'} spacing={0.6} alignItems={'center'}>
                <img src={props.src} alt='Icons'/>
                <Typography variant='subtitle1' lineHeight={1.4} textAlign={'left'} 
                color={'black'} sx={{fontSize:'0.8rem', fontWeight:'600'}} textTransform={'none'}>    
                    {props.texts}
                </Typography>
            </Stack>
        </Button>
      </>
    )
}

const EnergyGraph = () => {
  return (
    <>
        <Stack direction={'column'} spacing={2} mb={2}>

            <Grid container height={'100%'} rowGap={2}>
                    <Grid item lg={4} xs={12}>
                        <Stack direction={'column'} spacing={1} justifyContent={'space-between'} sx={{height:'100%', boxSizing:'border-box'}}>

                                <Card sx={{boxShadow:3, boxSizing:'border-box', py:'2px'}}>
                                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Typography variant='subtitle2' sx={{fontSize:'1rem', fontWeight:'700', p:1}}>Inverter Wise Capacity [KWp]</Typography>
                                        <Stack direction={'row'} alignItems={'center'} spacing={'2px'}>
                                            <IconButton><img src={Scan} alt='Scanner'/></IconButton>
                                            <IconButton sx={{p:0}}><img src={SET} alt='Setting'/></IconButton>
                                        </Stack>
                                    </Stack>
                                </Card>

                                <Card sx={{boxShadow:3, height:'88%', boxSizing:'border-box', p:1, flexGrow:1}}>
                                    <Stack direction={'column'} alignItems={'center'} justifyContent={'space-between'} sx={{height:'100%', boxSizing:'border-box'}}>    
                                        <img src={BarGraph} alt='BarGraph' height={'100%'} width={'100%'}/>    
                                    </Stack>
                                </Card>
                        </Stack>
                    </Grid>

                    <Grid item lg={8} xs={12}>
                        <Stack direction={'column'} spacing={1} justifyContent={'space-between'} sx={{height:'100%', boxSizing:'border-box', ml:{lg:1, xs:0}}}>
                            <Card sx={{boxShadow:3}}>
                                <CapacityStack />
                            </Card>
                            <Card sx={{boxShadow:3, height:'88%', boxSizing:'border-box', flexGrow:1, p:1}}>
                                <Stack direction={'column'} alignItems={'center'} justifyContent={'space-between'} sx={{height:'100%', boxSizing:'border-box'}}>    
                                    <img src={Green} alt='GreenGraph' height={'100%'} width={'100%'}/>    
                                </Stack>
                            </Card>
                        </Stack>
                    </Grid>
                </Grid>

            <Stack direction={'column'} spacing={1} justifyContent={'space-between'} sx={{height:'100%', boxSizing:'border-box'}}>
            <Card sx={{boxShadow:3, boxSizing:'border-box', py:'2px'}}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography variant='subtitle2' sx={{fontSize:'1rem', fontWeight:'700', p:1}}>Inverter Wise Capacity [KWp]</Typography>
                    <Stack direction={'row'} alignItems={'center'} spacing={'2px'}>
                        <IconButton><img src={Scan} alt='Scanner'/></IconButton>
                        <IconButton sx={{p:0}}><img src={SET} alt='Setting'/></IconButton>
                    </Stack>
                </Stack>
            </Card>

                <Card sx={{boxShadow:3, boxSizing:'border-box', p:1, flexGrow:1}}>
                    <Stack direction={'column'} alignItems={'center'} justifyContent={'space-between'} sx={{height:'100%', boxSizing:'border-box'}}>    
                        <img src={BigGreen} alt='BigGreenGraph' height={'100%'} width={'100%'}/>    
                    </Stack>
                </Card>
            </Stack>

        </Stack>
    </>
  )
}

const EnergyDetails = () => {
    return (
        <>
            <Stack direction={'column'} spacing={2} mb={2}>
            
                <Grid container height={'100%'} rowGap={2}>
                    <Grid item md={4} xs={12} px={'4px'}>
                        <Card sx={{display:'flex', justifyContent:'center', alignItems:'center', py:1, boxShadow:3}}>
                            <img src={ArchT} alt='Architecture'/>
                        </Card>
                    </Grid>

                    <Grid item md={4} xs={12} px={'4px'}>
                        <Card sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', 
                            textAlign:'center', height:'100%', boxSizing:'border-box', rowGap:1, boxShadow:3, py:2}}>
                            <Typography variant='subtitle1' sx={{fontWeight:'700', fontSize:'0.9rem'}}>
                                Total Energy Generation till Date
                            </Typography>
                            <Typography variant='subtitle1' sx={{fontWeight:'700', fontSize:'0.9rem'}}>
                                28/10/2023     01:24:37 PM
                            </Typography>
                            <Typography color={'#356E35'} variant='h6' sx={{fontWeight:'700'}}>
                                207662 [KWh]
                            </Typography>
                            <Typography variant='subtitle1' sx={{fontWeight:'700', fontSize:'0.9rem'}}>
                                From:     28/10/2023
                            </Typography>
                        </Card>
                    </Grid>

                    <Grid item md={4} xs={12} px={'4px'}>
                        <Card sx={{display:'flex', flexDirection:'row', justifyContent:'center', 
                            alignItems:'center', height:'100%', boxSizing:'border-box', boxShadow:3}}>
                            <Stack direction={'column'} spacing={3} alignItems={'center'} my={2}>
                                <Box sx={{bgcolor:'#356E35', textAlign:'center', width:'100%', borderRadius:2, py:'2px'}}>
                                    <Typography variant='subtitle1' color={'white'} sx={{fontWeight:'700', fontSize:'1rem'}}>
                                        User Details
                                    </Typography>
                                </Box>
                                <img src={ID} alt='IDCard' />
                            </Stack>
                        </Card>
                    </Grid>

                </Grid>
                
                <Grid container height={'100%'} rowGap={2}>
                    <Grid item lg={4} xs={12}>
                        <Stack direction={'column'} spacing={1} justifyContent={'space-between'} sx={{height:'100%', boxSizing:'border-box'}}>

                                <Card sx={{boxShadow:3, boxSizing:'border-box', py:'2px'}}>
                                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Typography variant='subtitle2' sx={{fontSize:'1rem', fontWeight:'700', p:1}}>Inverter Wise Capacity [KWp]</Typography>
                                        <Stack direction={'row'} alignItems={'center'} spacing={'2px'}>
                                            <IconButton><img src={Scan} alt='Scanner'/></IconButton>
                                            <IconButton sx={{p:0}}><img src={SET} alt='Setting'/></IconButton>
                                        </Stack>
                                    </Stack>
                                </Card>

                                <Card sx={{boxShadow:3, height:'88%', boxSizing:'border-box', p:1, flexGrow:1}}>
                                    <Stack direction={'column'} alignItems={'center'} justifyContent={'space-between'} sx={{height:'100%', boxSizing:'border-box'}}>    
                                        <img src={BarGraph} alt='BarGraph' height={'100%'} width={'100%'}/>    
                                    </Stack>
                                </Card>
                        </Stack>
                    </Grid>

                    <Grid item lg={8} xs={12}>
                        <Stack direction={'column'} spacing={1} justifyContent={'space-between'} sx={{height:'100%', boxSizing:'border-box', ml:{lg:1, xs:0}}}>
                            <Card sx={{boxShadow:3}}>
                                <CapacityStack />
                            </Card>
                            <Card sx={{boxShadow:3, height:'88%', boxSizing:'border-box', flexGrow:1, p:1}}>
                                <Stack direction={'column'} alignItems={'center'} justifyContent={'space-between'} sx={{height:'100%', boxSizing:'border-box'}}>    
                                    <img src={Green} alt='GreenGraph' height={'100%'} width={'100%'}/>    
                                </Stack>
                            </Card>
                        </Stack>
                    </Grid>
                </Grid>

            </Stack>
        </>
    )
}

export {WeatherChart, WeatherItems, CapacityStack, EnergyGraph, EnergyDetails}
export default TabArea
