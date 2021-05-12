import React from 'react'
import './Main.css'
import dkCrest from '../components/assets/imgs/dkCrest.png'
import druidCrest from '../components/assets/imgs/druidCrest.png'
import dhCrest from '../components/assets/imgs/dhCrest.png'
import hunterCrest from '../components/assets/imgs/hunterCrest.png'
import mageCrest from '../components/assets/imgs/mageCrest.png'
import monkCrest from '../components/assets/imgs/monkCrest.png'
import paladinCrest from '../components/assets/imgs/paladinCrest.png'
import priestCrest from '../components/assets/imgs/priestCrest.png'
import rogueCrest from '../components/assets/imgs/rogueCrest.png'
import shamanCrest from '../components/assets/imgs/shamanCrest.png'
import warlockCrest from '../components/assets/imgs/warlockCrest.png'
import warriorCrest from '../components/assets/imgs/warriorCrest.png'
import  Card from './Card'
const Main = () => {
  const classIcons = [
    {
      className: 'Death Knight',
      classIcon: dkCrest
    },
    {
      className: 'Demon Hunter',
      classIcon: dhCrest
    },
    {
      className: 'Druid',
      classIcon: druidCrest
    },
    {
      className: 'Hunter',
      classIcon: hunterCrest
    },
    {
      className: 'Mage',
      classIcon:  mageCrest
    },
    {
      className: 'Monk',
      classIcon: monkCrest
    },
    {
      className: 'Paladin',
      classIcon: paladinCrest
    },
    {
      className: 'Priest',
      classIcon: priestCrest
    },
    {
      className: 'Rogue',
      classIcon: rogueCrest
    },
    {
      className: 'Shaman',
      classIcon: shamanCrest
    },
    {
      className: 'Warlock',
      classIcon: warlockCrest
    },
    {
      className: 'Warrior',
      classIcon: warriorCrest
    },
  ]
   
    const classArr = classIcons.map((className,  i) => {
     return (
              <img className='classIcons four wide column' key={classIcons[i].classIcon} alt={classIcons[i].className} src={classIcons[i].classIcon} />    
          )
    })
    
    return(
      <div className="ui grid">{classArr}</div>
    )
  }



export default Main