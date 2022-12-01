import React from "react";
import {useDispatch,useSelector} from "react-redux";
import { addElement,removeElement } from "../store/arraySlice";

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
    const dispatch = useDispatch()
    const array = useSelector(state => state.arrayReducer.array)
    return <ol>{array.map((element,i) =>  <li id={i} key={i} >{element} <button onClick={(i) => { dispatch(removeElement(i))}}>REMOVE</button> </li> )}</ol>
}

export function App() {
    return(
        <div>
            <Input/>
            <List/> 
        </div>
    )
}


