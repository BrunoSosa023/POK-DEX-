import React from "react";
import Pokecard from "../../Components/PokeCard/PokeCard";
import { useState } from "react";
import "./Principal.css"



export default function Principal({pokeinfo, setPokeinfo}) {

  // Este estado se corresponde con el texto ingresado en la barra de busqueda
  const [text, setText] = useState("");
  const [order, setOrder] = useState (true);
  

  const manejarInput = (e) => {
    setText(e.target.value);
  };

  const manageSortId = (e) => {
    setOrder(false);
    setPokeinfo((previousState) => {
      let array = [...previousState];
      return array.sort((a, b) => a.number - b.number);
    });
  };

  const manageSortName = (e) => {
    setOrder(true);
    setPokeinfo((previousState) => {
      let array = [...previousState];
      function sortAlfabeto(x, y) {
        if (x.name < y.name) {
          return -1;
        }
        if (x.name > y.name) {
          return 1;
        }
        return 0;
      }
      return array.sort(sortAlfabeto);
    });
  };


    return ( 
    <div className="principal-container">
        <header>
           <div className="header-1"> 
           <div className="logo-title">
            <img src="/Images/Pokeball.png"
            className="logo"
            alt="Logo Pokebola"/>
            <h1>Pokédex</h1>
            </div>
            {order ? (
            <button className="arrow-button" onClick={manageSortId}>
              <div>
                <p style={{ fontSize: "10px", marginRight: "3px" }}>A</p>
                <p style={{ fontSize: "10px", marginRight: "3px" }}>Z</p>
              </div>
              <img
                src="/Images/Arrow.svg"
                alt="arrow-button"
                className="arrow"
              />
            </button>
          ) : (
            <button className="arrow-button" onClick={manageSortName}>
              <p>#</p>
              <img
                src="/Images/Arrow.svg"
                alt="arrow-button"
                className="arrow"
              />
            </button>
          )}
            </div>
            <div>
                <input type="search" placeholder="🔎 Buscar" className="search-bar" onChange={manejarInput}></input>
            </div>
        </header>
        <main>
            <Pokecard text={text} pokeinfo={pokeinfo} />
        </main>
    </div>
  );
}