import React from 'react'

const Offerbar = () => {

  return (
    // <section className=' bg-fixed  '>
    <section  className={` container flex-wrap items-center flex justify-between bg-black  transition duration-500  fixed top-0 z-50`}   >

        <div className="text-white ps-40 pe-12 pt-3 pb-3  !text-center">
            <p className='ps-105 h-[20px] '>
                GET EXTRA 15% OFF ON ALL CREDIT/DEBIT CARDS
            </p>
        </div>
        <div className='text-right text-white ms-3.5 pe-10'>
            Track Order | Complaint
        </div>
    </section>
  )
}
export default Offerbar