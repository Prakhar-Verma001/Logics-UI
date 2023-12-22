import { List, ListItem, ListItemButton, Stack, Typography } from '@mui/material'
import React from 'react'
import logo from '../Assests/New UI/logo 2logoBig.png'
import black from '../Assests/New UI/ChartPieSlice-d.png'
import white from '../Assests/New UI/ChartPieSlice-dwhite.png'

 
const SideBar = () => {
  return (
    <>
        <Stack direction={'column'} spacing={2} alignItems={'center'} my={3} height={'fit-content'}>
            <img src={logo} alt='logo'/>
            <Typography variant='subtitle2' textAlign={'center'}>eSolar Plant Monitoring System</Typography>
        </Stack>

        <List sx={{p:1}}>
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
    </>
  )
}

const ListOpt = (props) => {
  return (
    <>
        <ListItem sx={{"&:hover":{borderRadius:5, bgcolor:'blue', color:'white'}, p:'4px'}}>
            <ListItemButton>
                <Stack direction={'row'} spacing={1} alignItems={'center'} pl={1}>
                    <img src={black} alt='pics'
                    onMouseOver={e => (e.currentTarget.src = white)}
                    onMouseOut={e => (e.currentTarget.src = black)}
                    />
                    <Typography variant='subtitle2' sx={{}}>{props.text}</Typography>
                </Stack>
            </ListItemButton>
        </ListItem>
    </>
  )
}

export {ListOpt}
export default SideBar