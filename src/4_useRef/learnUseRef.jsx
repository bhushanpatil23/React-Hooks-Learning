import React, { useEffect, useRef, useState } from 'react'

const LearnUseRef = () => {

  let count = 0;
  const rCount = useRef(0);
  const [sCount, setSCount] = useState(0);

  function handleAdd() {
    count++;
    setSCount(prev => prev+1); //async causing re-render
    rCount.current++;

    console.log(count)
    console.log('state', sCount);
    console.log('ref', rCount);
  }

  console.log("rendering...")

  const inputRef = useRef(null);

  const result = useRef(null);

  useEffect(() => {
    // perform heavy operation
    result.current = 5;

  }, [])

  console.log(result);

  return (
    <div>
      <p>Normal: {count}</p>
      <p>Ref: {rCount.current}</p>
      <p>State: {sCount}</p>
      <button onClick={handleAdd}>Add</button>

      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  )
}

export default LearnUseRef