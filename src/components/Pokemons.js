import React from "react";
import { Link } from "react-router-dom";
import classes from "./Pokemons.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Pokemons(props) {

  function getPokemonData(url) {
    props.setIsLoading(true)
    axios.get(url)
    .then((response) => {
      props.setIsLoading(false)
      console.log(response.data)
      props.setPokemonDetail(response.data)
    })
  }

  return (
    <div className={classes.container}>
      <ul className={classes.list}>
      {props.pokemons.map((pokemon) => (
        <div
          key={pokemon.name}
          className={classes.card}
          onClick={() => {
            getPokemonData(pokemon.url)
          }}
        >
          {pokemon.name}
        </div>
      ))}
    </ul>
    </div>
    // <ul className={classes.list}>
    //   {props.pokemons.map((pokemon) => (
    //     <div
    //       key={pokemon.name}
    //       className={classes.card}
    //       onClick={() => {
    //         getPokemonData(pokemon.url)
    //       }}
    //     >
    //       {pokemon.name}
    //     </div>
    //   ))}
    // </ul>
  );
}

export default Pokemons;
