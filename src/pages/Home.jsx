import React from 'react'
import styled from 'styled-components'
import HomeOne from '../components/HomeOne'
import HomeTwo from '../components/HomeTwo'
import HomeThree from '../components/HomeThree'
import HomeFour from '../components/HomeFour'
import HomeFive from '../components/HomeFive'
import HomeSix from '../components/HomeSix'

const Home = () => {
  return (
    <MainHome>
      <HomeOne />
      <HomeTwo />
      <HomeThree />
      <HomeFour />
      <HomeFive />
      <HomeSix />
    </MainHome>
  )
}

const MainHome = styled.div`

`

export default Home