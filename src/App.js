import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusNumber, __addNumber } from "./redux/modules/counterSlice";

function App(){
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0)
  const globalNumber = useSelector((state)=> state.counter.number)

  const onChangeHandler = (event) => {
    const { value } = event.target
    setNumber(+value)
  }

  const onClickAddNumberHandler = () => {
    dispatch(__addNumber(number))
  }

  const onClickMinusNumberHandler = () => {
    dispatch(minusNumber(number))
  }

  return(
    <div>
      <div>{globalNumber}</div>
      <input type = 'number' onChange={onChangeHandler} />
      <button onClick={onClickAddNumberHandler}>추가하기</button>
      <button onClick={onClickMinusNumberHandler} > 뺴기 </button>
    </div>
  )
}

export default App;