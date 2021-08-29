import React from 'react'
import Problem from './components/Problem'
import LeftSideButton from './components/LeftSideButton'
import Answers from './components/Answers'
import CorrectOption from './components/CorrectOption'
export default function App () {
  return (
    <div className='containerBackground'>
      <div className='container'>
        <div className='leftSide'>
          <Problem />
          <LeftSideButton />
        </div>
        <div className='rightSide'>
          <Answers />
          <CorrectOption/>
        </div>
      </div>
    </div>
  )
}
