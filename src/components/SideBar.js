import { List, ListItem, ListItemButton, Stack, Typography, Box } from '@mui/material'
import React from 'react'
import logo from '../Assests/New UI/logo 2logoBig.png'
import black from '../Assests/New UI/ChartPieSlice-d.png'
import white from '../Assests/New UI/ChartPieSlice-dwhite.png'

 
const SideBar = () => {
  return (
    <>
    <Box m={1}>
        <Stack direction={'column'} spacing={2} alignItems={'center'} my={3} height={'fit-content'}>
            <img src={logo} alt='logo'/>
            <Typography variant='subtitle2' textAlign={'center'}>eSolar Plant Monitoring System</Typography>
        </Stack>

        <List sx={{p:0}}>
            <ListOpt text='Dashboard' />
            <ListOpt text='Analysis' />
            <ListOpt text='Monitoring' />
            <ListOpt text='WMS' />
            <ListOpt text='Energy Reporting' />
            <ListOpt text='Event Log Reports' />
            <ListOpt text='Plant Total Power Curve' />
            <ListOpt text='Outage' />
            <ListOpt text='User Details' />
            <ListOpt text='Logout' />
        </List>
      </Box>  
    </>
  )
}

const ListOpt = (props) => {
  return (
    <>
        <ListItem sx={{"&:hover":{borderRadius:5, bgcolor:'blue', color:'white'}, p:0, my:1, mx:0}}>
            <ListItemButton sx={{p:1}}>
                <Stack direction={'row'} spacing={0.7} alignItems={'center'}>
                    <img src={black} alt='pics'
                    onMouseOver={e => (e.currentTarget.src = white)}
                    onMouseOut={e => (e.currentTarget.src = black)}
                    />
                    <Typography variant='subtitle2' lineHeight={1.1}>{props.text}</Typography>
                </Stack>
            </ListItemButton>
        </ListItem>
    </>
  )
}

export {ListOpt}
export default SideBar
