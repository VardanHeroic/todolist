import React from "react";
import {useDispatch,useSelector} from "react-redux";
import { addElement,removeElement,startEditElement,endEditElement } from "../store/arraySlice";

function Input() {
    const dispatch = useDispatch()
    const isEditing = useSelector(state => state.arrayReducer.isEditing)
    let text = ''
    return(
        <div>
            <input onChange={(e) => {text = e.target.value}} ></input>
            <button onClick={() => { isEditing ? dispatch(endEditElement(text)) : dispatch(addElement(text)) }}>{isEditing ? 'EDIT' : 'ADD'}</button>
        </div>
    )
}

function List() {
    const dispatch = useDispatch()
    const array = useSelector(state => state.arrayReducer.array)
    const isEditing = useSelector(state => state.arrayReducer.isEditing)
    return (!isEditing &&
        <ol>{
        array.map((element,i) => {
            return (
                <li id={i} key={i} >
                    {element} 
                    <button onClick={() => { dispatch(removeElement(i))}}>REMOVE</button> 
                    <button onClick={() => { dispatch(startEditElement(i))}}>EDIT</button> 
                </li>
            )
        })
        }</ol>
    )
}

export function App() {
    return(
        <div>
            <Input/>
            <List/> 
        </div>
    )
}


