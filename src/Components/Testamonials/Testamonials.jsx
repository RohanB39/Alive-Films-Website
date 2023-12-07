import React from 'react'
import './Testamonials.css'
import SlickSlider from './SlickSlider'

const Testamonials = () => {
  return (
    <div className="t-wrapper">
        <div className="container">
            <div className="t-container">
                <div className="t-head">
                    <span className='tag'>Testimonials</span>
                    <span className='title'>Our satisfied clients speak volumes about their experiences with us.</span>
                </div>
            </div>
            <SlickSlider />
        </div>
    </div>
  )
}

export default Testamonials