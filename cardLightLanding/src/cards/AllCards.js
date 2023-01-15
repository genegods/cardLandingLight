import React from 'react'
import GetInTouchCard from './GetInTouchCard'
import LightCard from './LightCard'

const AllCards = () => {
  return (
   
  <React.Fragment>
  <section>
    <div className="space-y-5 md:allCardsContainer md:grid md:grid-cols-2 gap-10 md:mx-36">
      <LightCard/>
      <GetInTouchCard/>
    </div>
  </section>
</React.Fragment>
  )
}

export default AllCards