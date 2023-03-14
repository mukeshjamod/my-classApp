import { useState, useEffect } from "react";

const useCounter = (forwards = true) =>
{
    const [counter,setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval (() =>
      
      { if(forwards){

          setCounter((preCounter) => preCounter + 1);
      }else{
        setCounter((preCounter)=> preCounter - 1);
      }
      },1000)
    
      return () => {
        clearInterval(interval);
      }
    }, [forwards]);

    return counter;
};

export default useCounter;