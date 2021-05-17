import React from 'react'
import '../components/assets/styles/Card.css'
const Card = props => {
  
    const classArr = props.classIcons.map((className,  i) => {
        return (
        <div className="four wide column">
            <img className='classIcons' onClick={props.onClick} key={props.classIcons[i].classIcon} alt={props.classIcons[i].className} src={props.classIcons[i].classIcon} />    
        </div>   
             )
       })

   return classArr
}

export default Card