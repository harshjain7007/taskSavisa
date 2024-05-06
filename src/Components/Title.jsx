import React from 'react'

const Title = (props) => {
     const { title } = props
  return (
    <>
      <h1 className='myTitle'>{title}</h1>
    </>
  )
}

export default Title