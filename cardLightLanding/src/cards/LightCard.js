import React from 'react'

const LightCard = () => {
  return (
   
  <React.Fragment>
  <section>
    <div className="cardContainer mx-20 py-10 bg-white px-10 shadow-lg flex flex-col justify-center border-4 border-red-900 md:mx-0">
    <span className="border-b-8 w-60 mb-3 border-yellow-500"></span>
    <div>
    <p className="text-5xl font-semibold capitalize borderColor"> Gooddo lights </p>
    <p>
            Tailwind lets you conditionally Tailwind lets you conditionally
            apply utility classes in different states using variant modifiers.
            For example, use hover:min-h-full to only apply the min-h-full
            utility on hover. apply utility classes in different states using
            variant modifiers. For example, use hover:min-h-full to only apply
            the min-h-full utility on hover.
            apply utility classes in different states using variant modifiers.
            For example, use hover:min-h-full to only apply the min-h-full
            utility on hover. apply utility classes in different states using
            variant modifiers. For example, use hover:min-h-full to only apply
            the min-h-full utility on hover.
          </p>
          <button
            type="button"
            className="px-6 py-3.5 w-40 text-white bgColor font-bold rounded-lg"
          >
            Get Started
          </button>
    </div>
    </div>
  </section>
</React.Fragment>
  )
}

export default LightCard