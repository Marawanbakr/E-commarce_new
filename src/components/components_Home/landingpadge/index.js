import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='landing_padge'>
      <div className='container'>
        <div className='right_section'>
          <h1>Design Your Comfort Zone</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <Link to='/products'>
            <button>shop now</button>
          </Link>
        </div>
        <div className='left_section'>
          <img
            src='https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg'
            alt='main_image'
          />
          <div className='alt_img'>
            <img
              src='https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.78991864.jpeg'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
