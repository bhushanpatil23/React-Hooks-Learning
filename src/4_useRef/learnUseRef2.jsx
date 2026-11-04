import React, { forwardRef, useId, useRef } from 'react'

const LearnUseRef2 = () => {

  const inputRef = useRef(null);

  return (
    <div>
      <button onClick={() => inputRef.current.focus()}>Focus from Parent</button>
      <Child ref={inputRef}/>
    </div>
  )
}

const Child = ({ref}) => {
    const inputId = useId();
    return (
        <div>
            <label htmlFor={inputId}>Input In Child</label>
            <input ref={ref} id={inputId} type="text" />
        </div>
    );
};

// const Child = forwardRef((props, ref) => {
//   const inputId = useId();
//   return (
//     <div>
//       <label htmlFor={inputId}>Input In Child</label>
//       <input ref={ref} id={inputId} type="text" />
//     </div>
//   )
// })

export default LearnUseRef2;