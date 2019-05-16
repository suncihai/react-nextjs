import { useState, useEffect } from 'react'

const Test = () => {
   const [count, setCount] = useState(0);

   useEffect(() => {
      document.title = `BitMart Partners ${count}`
   },[count])

   return (
      <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>
         Click me
         </button>
      </div>
   );
}

export default Test;
