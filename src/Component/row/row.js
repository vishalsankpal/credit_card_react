import React from 'react'
import './row.scss';
const Row = ({children,columnCount}) => {
  return (
    <div className='row'>
        {children}
        {/* <Card columnCount={columnCount}></Card> */}
    </div>
  )
}

export default Row
