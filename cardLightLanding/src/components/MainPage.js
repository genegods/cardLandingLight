import React from 'react'
import Hero from './Hero'
import heroImg from '../asserts/bg16.jpg'
import AllCards from '../cards/AllCards'

const MainPage = () => {
  return (
    <React.Fragment>
    <section>
      <div className=" h-screen bg-red-900 md:w-2/3 md:mx-auto md:relative md:shadow-lg">
        <Hero/>

        {/* picture section */}
        <div className="absolute top-16 right-16 ">
        <img src={heroImg} alt='heroImg'className='heroImg'/>
        </div>


        {/* allCards */}
        <div className='absolute top-96'>
            <AllCards/>
        </div>
      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage