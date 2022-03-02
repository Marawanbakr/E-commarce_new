import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { RiStarFill, RiStarHalfFill } from 'react-icons/ri'
import { GrFormCheckmark } from 'react-icons/gr'
import { HiPlusSm, HiMinusSm } from 'react-icons/hi'
const EntertainmentCenter = () => {
  const [activeImge, setActiveImge] = useState('defult')
  const [activeBtn, setActiveBtn] = useState('defultBtn')
  const [countOfProduct, setCountOfProduct] = useState(1)

  const Increase = () => {
    setCountOfProduct(countOfProduct + 1)
  }
  const decrease = () => {
    if (countOfProduct >= 2) {
      setCountOfProduct(countOfProduct - 1)
    }
  }

  return (
    <div className='single_padge'>
      <div className='container'>
        <div className='our_img'>
          <div className='btn_back'>
            <Link to='/products'>
              <button className='back_to_home'>back to products</button>
            </Link>
          </div>
          <div className='defult_img'>
            {activeImge === 'defult' ? (
              <img
                src='https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af'
                alt='defult'
              />
            ) : (
              ''
            )}
            {activeImge === 'II_active' ? (
              <img
                src='https://dl.airtable.com/.attachments/f4720cc51a45ccc204f7476d51cb1b0e/eeb5fe4e/z-extra-1.jpeg'
                alt='alt_imge'
              />
            ) : (
              ''
            )}
            {activeImge === 'III_active' ? (
              <img
                src='	https://dl.airtable.com/.attachments/a73777f8a2cbf4820ccaa6aa4349db01/c541de4b/z-extra-2.jpeg'
                alt='alt_imge'
              />
            ) : (
              ''
            )}
            {activeImge === 'IV_active' ? (
              <img
                src='	https://dl.airtable.com/.attachments/7a50daf83875879b373d91ebb9bb6012/c1695f7e/z-extra-3.jpeg'
                alt='alt_imge'
              />
            ) : (
              ''
            )}
            {activeImge === 'IIV_active' ? (
              <img
                src='https://dl.airtable.com/.attachments/5592998dcaee77b12c50bda63dd94d06/6ad61540/z-extra-4.jpeg'
                alt='alt_imge'
              />
            ) : (
              ''
            )}
          </div>
          <div className='gallery'>
            <img
              onClick={() => setActiveImge('defult')}
              className={`${activeImge === 'defult' ? 'active' : ''}`}
              src='https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af'
              alt=''
            />

            <img
              onClick={() => setActiveImge('II_active')}
              className={`${activeImge === 'II_active' ? 'active' : ''}`}
              src='https://dl.airtable.com/.attachments/f4720cc51a45ccc204f7476d51cb1b0e/eeb5fe4e/z-extra-1.jpeg'
              alt=''
            />
            <img
              onClick={() => setActiveImge('III_active')}
              className={`${activeImge === 'III_active' ? 'active' : ''}`}
              src='	https://dl.airtable.com/.attachments/a73777f8a2cbf4820ccaa6aa4349db01/c541de4b/z-extra-2.jpeg'
              alt=''
            />
            <img
              onClick={() => setActiveImge('IV_active')}
              className={`${activeImge === 'IV_active' ? 'active' : ''}`}
              src='	https://dl.airtable.com/.attachments/7a50daf83875879b373d91ebb9bb6012/c1695f7e/z-extra-3.jpeg'
              alt=''
            />
            <img
              onClick={() => setActiveImge('IIV_active')}
              className={`${activeImge === 'IIV_active' ? 'active' : ''}`}
              src='	https://dl.airtable.com/.attachments/5592998dcaee77b12c50bda63dd94d06/6ad61540/z-extra-4.jpeg'
              alt=''
            />
          </div>
        </div>
        <div className='our_info_cadr'>
          <h2> Entertainment Center</h2>
          <div className='vote'>
            <div className='stars'>
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarHalfFill />
            </div>
            <p>(11 customer reviews)</p>
          </div>
          <h5 className='price'>$599.99</h5>
          <p className='lorem'>
            Cloud bread VHS hell of banjo bicycle rights jianbing umami
            mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher
            waistcoat, authentic chillwave trust fund. Viral typewriter
            fingerstache pinterest pork belly narwhal. Schlitz venmo everyday
            carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag
            kinfolk microdosing gochujang live-edge
          </p>
          <div className='some_info'>
            <div className='I'>
              <span>Available :</span>
              <p>In Stock</p>
            </div>
            <div className='I'>
              <span>SKU :</span>
              <p>RecoM2MyHJGHLVi5l</p>
            </div>
            <div className='I'>
              <span>Brand :</span>
              <p>liddy</p>
            </div>
          </div>
          <hr className='line'></hr>
          <div className='selected_attintion'>
            <div className='select_color'>
              <p>colors :</p>
              <div className='spanes'>
                <button
                  // onClick={() => setActiveBtn('first')}
                  className={`${activeBtn === 'defultBtn' ? 'activeBtn' : ''}`}
                >
                  {activeBtn === 'defultBtn' ? (
                    <i className='icon'>
                      <GrFormCheckmark />
                    </i>
                  ) : (
                    ''
                  )}
                </button>
              </div>
            </div>
            <div className='number_of_your_product'>
              <div className='count'>
                <button>
                  <HiMinusSm onClick={() => decrease()} />
                </button>
                <h2>{countOfProduct}</h2>
                <button onClick={() => Increase()}>
                  <HiPlusSm />
                </button>
              </div>
              <button className='add_to_cart'>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EntertainmentCenter
