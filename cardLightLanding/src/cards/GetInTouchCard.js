import React from 'react'
import { MediaData } from '../data/MediaData'

const GetInTouchCard = () => {
  return (
    <React.Fragment>
    <section>
      <div className="cardContainer mx-20 py-10 bgColor text-white px-10 shadow-lg flex flex-col justify-center space-y-5 border-4 border-red-900 md:mx-0 md:mt-40">
      <p className="text-5xl font-semibold capitalize"> Get in touch Page</p>
      <p className="text-xl">Tailwind lets you  modipply utility classes in different states using variant modifiers. For example, use</p>
      <p className="">Tailwind lets you conditio ample, use hover:min-h-full to only apply the min-h-full utility on hover. apply utility classes in different states using variant modifiers. For example, use</p>
      <div className="flex space-x-2">
        {
            MediaData.map((item, index) => {
                return(
                    <div key={index}>
                        <div>
                        <img src={item.img} alt='media'/>
                        </div>
                    </div>
                )
            })

        }
      </div>
       
      </div>
    </section>
  </React.Fragment>
  )
}

export default GetInTouchCard