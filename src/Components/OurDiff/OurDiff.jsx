import React from 'react'
import './OurDiff.css'
import { features } from '@/src/utils/data'
import { ourDiffFeatures } from "@/src/utils/data";
import Image from 'next/image'

const OurDiff = () => {
  return (
    <div className="od-wrapper">
        <div className="container">
            <div className="od-container">
                {/* Head */}
                <div className="od-head">
                    <span className='title'>Awards & Recognition</span>
                    <span className='text'>Alive films continues to be the top video agency for brand and product marketers.</span>
                </div>
                {/* Features */}
                <div className="od-features">
                    {
                        ourDiffFeatures.map((features, i) =>(
                            <div key={i}>
                                <Image src={features.icon} alt='features' width={160} height={200}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurDiff