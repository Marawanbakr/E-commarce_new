import React, { useState } from 'react'
import { OurData } from './our_data'
import { BsGridFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'

const Product = () => {
  const [info, setInfo] = useState(OurData)
  const [column, setColumn] = useState(false)
  const [input, setInput] = useState(0)
  const [valueText, setValue] = useState('')

  /* click an option to filtter data*/
  const removeItemB = () => {
    setInfo((item) => {
      let newCard = item.filter((info) => info.type !== 'b')
      return newCard
    })
  }
  const removeItemA = () => {
    setInfo((item) => {
      let newCard = item.filter((info) => info.type !== 'a')
      return newCard
    })
  }

  const removeItemC = () => {
    setInfo((item) => {
      let newCard = item.filter((info) => info.type !== 'c')
      return newCard
    })
  }
  const getAllCard = () => {
    setInfo((item) => {
      let newCard = item.filter((info) => info.state === 'yes')
      return newCard
    })
  }

  //  dispaly column card
  const DisplayColumn = () => {
    return (
      <div className='our_card'>
        {info.map((box) => {
          const { id, img, icon, title, price, type } = box
          return (
            <div className='card' key={id}>
              <div
                className='img'
                onClick={() => {
                  switchRoutes(id)
                }}
              >
                <img src={img} alt='' />
                <div className='icnos'>{icon}</div>
              </div>
              <div className='title__info'>
                <p>{title}</p>
                <p>$ {price}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  //  dispaly row card
  const DisplayRow = () => {
    return (
      <div className=' our_card_row'>
        {info.map((box) => {
          const { id, img, icon, title, price, type } = box
          return (
            <div className='card_row' key={id}>
              <div
                className='img_row'
                onClick={() => {
                  switchRoutes(id)
                }}
              >
                <img src={img} alt='' />
                <div className='icnos_row'>{icon}</div>
              </div>
              <div className='title__info_row'>
                <h4>{title}</h4>
                <p className='price_row'>$ {price}</p>
                <p className='lorem_row'>
                  Cloud bread VHS hell of banjo bicycle rights jianbing umami
                  mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr
                  dreamcatcher waistcoat, authentic ...
                </p>
                <button
                  onClick={() => {
                    switchRoutes(id)
                  }}
                >
                  details
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  // const Switch Routes
  const switchRoutes = (id) => {
    switch (true) {
      case id === 1:
        window.location = '/products/Modern_Poster'
        break
      case id === 2:
        window.location = '/products/Bar_Stool'
        break
      case id === 3:
        window.location = '/products/Armchair'
        break
      case id === 4:
        window.location = '/products/Suede_Armchair'
        break
      case id === 5:
        window.location = '/products/Leather_Chair'
        break
      case id === 6:
        window.location = '/products/Emperor_Bed'
        break
      case id === 7:
        window.location = '/products/Accent_Chair'
        break
      case id === 8:
        window.location = '/products/Shelf'
        break
      case id === 9:
        window.location = '/products/Modern_Bookshelf'
        break
      case id === 10:
        window.location = '/products/High_Back_Bench'
        break
      case id === 11:
        window.location = '/products/Wooden_Desk'
        break
      case id === 12:
        window.location = '/products/Dining_Table'
        break
      case id === 13:
        window.location = '/products/Entertainment_Center'
        break
      case id === 14:
        window.location = '/products/UtopiaSofa'
        break
      case id === 15:
        window.location = '/products/Leather_Sofa'
        break
      case id === 16:
        window.location = '/products/Albany_Sectional'
        break
      case id === 17:
        window.location = '/products/Simple_Chair'
        break
      case id === 18:
        window.location = '/products/Vase_Table'
        break
      case id === 19:
        window.location = '/products/Sofa_Set'
        break
      case id === 20:
        window.location = '/products/Wooden_Desk'
        break
      case id === 21:
        window.location = '/products/Wooden_Table'
        break
      case id === 22:
        window.location = '/products/Wooden_Bed'
        break
      case id === 23:
        window.location = '/products/Albany_Table'
        break
    }
  }

  return (
    <div className='product'>
      <div className='container'>
        <div className='left_card_category'>
          <input
            type='search'
            placeholder='Search'
            value={valueText}
            onInput={(e) =>
              setInfo((item) => {
                setValue(e.target.value)
                // let newItems = item.filter(
                //   (data) => data.title.includes(e.target.value) === true
                // )
                let newItems = item.filter(function (data) {
                  console.log(data.title.includes(e.target.value))
                  return data.title.includes(e.target.value)
                })
                return newItems
              })
            }
          />
          <div className='our_category'>
            <h4>Category</h4>
            <div className='our_button'>
              <button onClick={() => getAllCard()}>all</button>
              <button onClick={() => removeItemC()}>office</button>
              <button onClick={() => removeItemB()}>living room</button>
              <button onClick={() => removeItemA()}>kitchen</button>
              <button>bedroom</button>
              <button>dinig</button>
              <button>kids</button>
            </div>
          </div>
          <div className='our_company'>
            <h4>company</h4>
            <select name='company' id='company'>
              <option value='all'>all</option>
              <option value='marcos'>marcos</option>
              <option value='lidy'>lidy</option>
              <option value='ikea'>ikea</option>
              <option value='careesa'>careesa</option>
            </select>
          </div>
          <div className='our_colors'>
            <h4>color</h4>
            <div className='colors'>
              <button>all</button>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className='our_price'>
            <h4>price</h4>
            <p>$ {Number(input)}</p>
            <input
              min={0}
              max={3099}
              type='range'
              value={Number(input)}
              // onInput={(e) => setInput(e.target.value)}
              onInput={(e) =>
                setInfo((itm) => {
                  setInput(e.target.value)
                  /* this is arrow function */
                  // let newItems = item.filter((data) => data.price <= input)
                  console.log(`itm ${itm}`)
                  let dataPrice = itm.price
                  let inputValue = Number(e.target.value)
                  /* this is anonymous function */
                  let newItemsHeigher = [...itm].filter(function (data) {
                    console.log(dataPrice)
                    console.log(inputValue)
                    if (dataPrice >= inputValue) {
                      return data
                    }
                  })
                  let newItemsLower = [...itm].filter(function (data) {
                    console.log(dataPrice)
                    console.log(inputValue)
                    if (dataPrice < inputValue) {
                      return data
                    }
                  })
                  if (dataPrice < inputValue) {
                    return newItemsLower
                  } else if (dataPrice >= inputValue) {
                    return newItemsHeigher
                  }

                  // return newItems
                })
              }
            />
          </div>
          <div className='selcet'>
            <p>free shipping</p>
            <input className='checkbox' type='checkbox' />
          </div>
          <div className='clear'>
            <button>clear filters</button>
          </div>
        </div>
        <div className='right_card_product'>
          <div className='frist_line_section'>
            <div className='icons'>
              <button
                className={`${column ? 'active_button' : 'notactive'}`}
                onClick={() => setColumn(true)}
              >
                <BsGridFill fontSize={20} />
              </button>
              <button
                className={`${column ? 'notactive' : 'active_button'}`}
                onClick={() => setColumn(false)}
              >
                <FaBars />
              </button>
            </div>
            <div className='title'>{info.length} products found</div>
            <span></span>
            <div className='sortby'>
              <p>sort by</p>
              <select name='price' id='price'>
                <option value='price_lowest'>price (Lowest)</option>
                <option value='price_Highest'>Name (Highest)</option>
                <option value='start_name_A'>price (A - Z)</option>
                <option value='start_name_Z'>price (Z - A)</option>
              </select>
            </div>
          </div>
          {column && <DisplayColumn />}
          {column || <DisplayRow />}
        </div>
      </div>
    </div>
  )
}

export default Product
