import React from 'react'

// Icons
import { FaInfoCircle } from "react-icons/fa";

const ExtraContent = () => {
  return (
    <>
      {/* Title */}
      <div className='extra-content-title'>
        <div className="title">
          <div className="head">
            <h5 className="head-text">
              <FaInfoCircle className="icon" />
              Film bilgileri
            </h5>
            <span className="head-text-right">
              9 ay önce eklendi
            </span>
          </div>
        </div>
      </div>
      {/* Title */}

      {/* About Movie */}
        <div className='about-movie'>
          <div className=''>

          </div>
        </div>
      {/* About Movie */}
    </>
  )
}

export default ExtraContent