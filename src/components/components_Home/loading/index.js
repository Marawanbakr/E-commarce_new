import React, { useEffect, useRef } from 'react'

const Loding = () => {
  const preloader = useRef(null)
  useEffect(() => {
    const timer = setTimeout(() => {
      preloader.current.style = [
        `display:none;
      `,
      ]
    }, 1500)
  }, [])
  return (
    <div ref={preloader} className='preloader'>
      <div className='preloader-inner'>
        <div className='preloader-icon'>
          <span></span>
          {/* <span></span> */}
        </div>
      </div>
    </div>
  )
}

export default Loding
