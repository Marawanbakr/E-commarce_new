import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Feature = () => {
  return (
    <div className='featured_product'>
      <div className='main-title'>
        <h1>Featured Products</h1>
      </div>
      <div className='container'>
        <div className='card'>
          <div className='img'>
            <img
              src='https://dl.airtable.com/.attachmentThumbnails/1af97a4d3eb28563962d8e3520727ffc/1b9cc17f'
              alt=''
            />
            <div className='icnos'>
              <FaSearch fontSize={25} />
            </div>
          </div>
          <div className='info'>
            <p className='title'>High-Back Bench</p>
            <p className='price'>$399.99</p>
          </div>
        </div>
        <div className='card'>
          <div className='img'>
            <img
              src='https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af'
              alt=''
            />
            <div className='icnos'>
              <FaSearch fontSize={25} />
            </div>
          </div>
          <div className='info'>
            <p className='title'>Entertainment Center</p>
            <p className='price'>$599.99</p>
          </div>
        </div>
        <div className='card'>
          <div className='img'>
            <img
              src='https://dl.airtable.com/.attachmentThumbnails/1e4a818f5184993e430420a152315b40/873c7094'
              alt=''
            />
            <div className='icnos'>
              <FaSearch fontSize={25} />
            </div>
          </div>
          <div className='info'>
            <p className='title'>Modern Bookshelf</p>
            <p className='price'>$319.99</p>
          </div>
        </div>
      </div>
      <Link to='/products'>
        <button>all Products</button>
      </Link>
    </div>
  )
}

export default Feature
