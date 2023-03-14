//import React, {useState, useEffect} from 'react'
import useCounter from '../hooks/use-counter'
import Card from './Card'

const ForwardCounter = () => {

    const counter = useCounter();
    // const [counter,setCounter] = useState(0);

    // useEffect(() => {
    //   const interval = setInterval (() =>
      
    //   {
    //     setCounter((preCounter) => preCounter + 1);
    //   },1000)
    
    //   return () => {
    //     clearInterval(interval);
    //   }
    // }, [])
    
    
  return (
    <Card>{counter}</Card>
  )
}

export default ForwardCounter;