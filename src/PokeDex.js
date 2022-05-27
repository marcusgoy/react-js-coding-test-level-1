import "./App.css";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import Modal from "react-modal";
import Pokemons from "./components/Pokemons";
import Pagination from "./components/Pagination";
import Pokemon from "./components/Pokemon";
import Search from "./components/Search";
import classes from "./PokeDex.module.css";

function PokeDex() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //Pagination
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [previousPageUrl, setPreviousPageUrl] = useState(null);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "black",
      color: "white",
    },
    overlay: { backgroundColor: "grey" },
  };
  //Question
  /** 
  if (!isLoading && pokemons.length === 0) {
    return (
      <div>
        <header className="App-header">
          <h1>Welcome to pokedex !</h1>
          <h2>Requirement:</h2>
          <ul>
            <li>
              Call this api:https://pokeapi.co/api/v2/pokemon to get pokedex, and show a list of pokemon name.
            </li>
            <li>Implement React Loading and show it during API call</li>
            <li>when hover on the list item , change the item color to yellow.</li>
            <li>when clicked the list item, show the modal below</li>
            <li>
              Add a search bar on top of the bar for searching, search will run
              on keyup event
            </li>
            <li>Implement sorting and pagingation</li>
            <li>Commit your codes after done</li>
            <li>If you do more than expected (E.g redesign the page / create a chat feature at the bottom right). it would be good.</li>
          </ul>
        </header>
      </div>
    );
  }
  */

  useEffect(() => {
    setIsLoading(true)
    let cancelToken
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancelToken = c )
    }).then((res) => {
      setIsLoading(false);
      setPreviousPageUrl(res.data.previous);
      setNextPageUrl(res.data.next);
      setPokemons(res.data.results);
    });
    return () => cancelToken()
  }, [currentPageUrl]);

  function navigateToPreviousPage() {
    setCurrentPageUrl(previousPageUrl)
  }

  function navigateToNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }


  return (
    <div>
      <header className="App-header">
        {isLoading ? (
          <>
            <div className="App">
              <header className="App-header">
                <b>
                  <ReactLoading type={"spinningBubbles"} color={"cyan"} />
                </b>
              </header>
            </div>
          </>
        ) : (
          <>
            <h1>Welcome to pokedex !</h1>
            <Search />
            <Pokemons pokemons={pokemons} setPokemonDetail={setPokemonDetail} setIsLoading={setIsLoading}></Pokemons>
            <Pagination 
            navigateToPreviousPage={previousPageUrl ? navigateToPreviousPage : null}
            navigateToNextPage={nextPageUrl ? navigateToNextPage: null}
            />
          </>
        )}
      </header>

      {pokemonDetail && (
        <Modal
          isOpen={pokemonDetail ? true : false}
          contentLabel={pokemonDetail?.name || ""}
          onRequestClose={() => {
            setPokemonDetail(null);
          }}
          ariaHideApp={false}
          style={customStyles}
        >
          <div>
              <Pokemon name={pokemonDetail.name} image={pokemonDetail.sprites.front_default}
              stats={pokemonDetail.stats}></Pokemon>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default PokeDex;
