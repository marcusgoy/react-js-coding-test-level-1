import {React, useRef, useEffect, useState} from 'react';
import classes from './Search.module.css';

function Search(props) {
    const [input, setInput] = useState();
    const userInputRef = useRef();
    const [tempPokemons, setTempPokemons] = useState([])
    const [tempPreviousPageUrl, setTempPreviousPageUrl] = useState(null)
    const [tempNextPageUrl, setTempNextPageUrl] = useState(null)
    const [count, setCount] = useState()

    useEffect(() => {
        // props.setPokemons([])
        // props.setPokemons(null)
        // props.setPokemons(null)
        
        if (!input) {
            // props.setPokemons(tempPokemons)
            // props.setPreviousPageUrl(tempPreviousPageUrl)
            // props.setNextPageUrl(tempNextPageUrl)
        }

    }, [input])

    return (
        <div> 
            <input className={classes.input} type="text" name="search_box" placeholder='Search for ...' ref={userInputRef} onChange={() => {
                setInput(userInputRef.current.value)
            }} />
        </div>
    )
}
export default Search