import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, multiplication, division} from "../store/calcSlice";

function CalcPage() {
    const dispatch = useDispatch();
    const {result} = useSelector(state => state.calcReducer);
    const [numberOne, setNumberOne] = useState({number1:''});
    const [numberTwo, setNumberTwo] = useState({number2:''});
    const incrementBtn = () => {
        if ( numberOne.number1 === ''){
            alert("The first field is empty")
        } else if (numberTwo.number2 === ''){
            alert("The second field is empty")
        }
        dispatch(increment({numberOne, numberTwo}))
    };
    const decrementBtn = () => {
        if ( numberOne.number1 === ''){
            alert("The first field is empty")
        } else if (numberTwo.number2 === ''){
            alert("The second field is empty")
        }
        dispatch(decrement({numberOne, numberTwo}))
    };
    const multiplicationBtn = () => {
        if ( numberOne.number1 === ''){
            alert("The first field is empty")
        } else if (numberTwo.number2 === ''){
            alert("The second field is empty")
        }
        dispatch(multiplication({numberOne, numberTwo}))
    };
    const divisionBtn = () => {
        if ( numberOne.number1 === ''){
            alert("The first field is empty")
        } else if (numberTwo.number2 === ''){
            alert("The second field is empty")
        }
        dispatch(division({numberOne, numberTwo}))
    }
    return (
        <>
            <input type="number"
                   name="number1"
                   onChange={(e)=>setNumberOne(+e.target.value)}
            />
            <input type="number"
                   name="number2"
                   onChange={(e)=>setNumberTwo(+e.target.value)}
            />
            <button onClick={incrementBtn}>+</button>
            <button onClick={decrementBtn}>-</button>
            <button onClick={multiplicationBtn}>*</button>
            <button onClick={divisionBtn}>/</button>
            <h1>{result}</h1>

        </>
    );
}

export default CalcPage;