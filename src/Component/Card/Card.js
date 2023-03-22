import React from 'react';
import './Card.scss';
const Card = ({columnCount,children,direction}) => {
  return (
    <div className={`card card-${Math.round(12 / columnCount)} ${direction && direction}` }>
      {children}
    </div>
  )
}

export default Card
