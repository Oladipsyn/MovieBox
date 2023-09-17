import React from 'react'
import Banner from './banner'
import SectionTwo from './sectionTwo'
import Footer from './footer'

const HomePage = () => {
  return (
    <div className="flex flex-col justify-start items-center h-fit w-full">
      <Banner />
      <SectionTwo/>
      <Footer/>
  </div>
  )
}

export default HomePage