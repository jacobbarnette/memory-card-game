import React, {useState} from 'react'
import Header from './components/Header'
import Main from './components/Main'
const App = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  }

  
  return(
    <>
      <Header count={count}/>
      <Main addCount={addCount}/>
   </>
  )
}

export default App