import React from 'react'
import { Outlet } from 'react-router-dom'

const PageLayout = () => {
  return (
    <>PageLayout
    <Outlet context={{name:'React'}}/>
    </>
  )
}

export default PageLayout