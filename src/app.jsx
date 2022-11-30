import React from "react";
import {useDispatch,useSelector} from "react-redux";
import { addElement } from "../store/arraySlice";

function Input() {
    const dispatch = useDispatch()
    let text = ''
    return(
        <div>
            <input onChange={(e) => {text = e.target.value}} ></input>
            <button onClick={() => {dispatch(addElement(text))}}>ADD</button>
        </div>
    )
}

function List() {
    const array = useSelector(state => state.arrayReducer.array)
    return <ol>{array.map((element,i) =>  <li key={i} >{element}</li> )}</ol>
}

export function App() {
    return(
        <div>
            <Input/>
            <List/> 
        </div>
    )
}


