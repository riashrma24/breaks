import React from 'react'
import { Grid } from '@mui/material'
import Navigation from '../Navigation/Navigation'
import HomeSection from '../HomeSection/HomeSection'
import RightPart from '../RightPart/RightPart'
import Profile from '../Profile/Profile'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import PostingCard from '../HomeSection/PostingCard'

export const HomePage = () => {
  return (
    <Grid container xs={12} className='px-5 lg:px-36 justify-between' >
      <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
        <Navigation />
      </Grid>
      <Grid item xs={12} lg={6} className='hidden lg:block w-full relative'>
        <Routes>
          <Route path='/' element={<HomeSection />}></Route>
          <Route path='/home' element={<HomeSection />}></Route>
          <Route path='/profile/:id' element={<Profile />}></Route>
          <Route path='/posting/:id' element={<PostingCard />}></Route>
        </Routes>

      </Grid>
      <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
        <RightPart />
      </Grid>
    </Grid>
  )
}
