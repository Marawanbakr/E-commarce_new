import React, { useState } from 'react'
import { HiPlusSm, HiMinusSm } from 'react-icons/hi'

const Cart = () => {
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
    <div className='cartpadge'>
      <div className='container'>
        <div className='our_items'>
          <h5>item</h5>
          <h5>price</h5>
          <h5>quntity</h5>
          <h5>subtotal</h5>
        </div>
        <hr />
        <div className='body_title'>
          <div className='our_order'>
            <div className='my_order'>
              <div className='our_info'>
                <h5 className='name'>test</h5>
                <p>
                  color <span></span>
                </p>
              </div>
            </div>
            <h5>454</h5>
            <h5>to</h5>
            <div className='count'>
              <button>
                <HiMinusSm onClick={() => decrease()} />
              </button>

              <button onClick={() => Increase()}>
                <HiPlusSm />
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Cart
