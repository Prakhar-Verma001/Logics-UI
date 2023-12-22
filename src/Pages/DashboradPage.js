import { Grid } from '@mui/material'
import React from 'react'
import Header1 from '../components/Headers'
import SideBar from '../components/SideBar'
import TabArea from '../components/TabArea'

const DashboradPage = () => {
  return (
    <>
        <Grid container>
            <Grid item lg={2} display={{lg:'block', xs:'none'}} sx={{bgcolor:'#F7F7F7'}}>
                <SideBar />
            </Grid>
            <Grid item lg={10} xs={12} sx={{bgcolor:'#F7F7F7'}}>
                <Header1 />
                <TabArea />
            </Grid>
        </Grid>
    </>
  )
}

export default DashboradPage