import React from 'react'
import './form.scss'
import BoxIcon from '../../Components/BoxIcon'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const CheckCompletedForms = (props) => {
  const { selected } = props

  return (
    <div className='bocIcons'>
    <BoxIcon faUser={faUser} bgColor={selected > 1} />
    <BoxIcon faUser={faUser} bgColor={selected > 2}  />
    <BoxIcon faUser={faUser} bgColor={selected > 3} />
    </div>
  )
}

export default CheckCompletedForms


