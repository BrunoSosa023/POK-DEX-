import React from "react";
import "./Pokecard.css"
import { Link } from "react-router-dom"


export default function Pokecard({ text, pokeinfo }) {
  // text es el texto que se cambia con el Input, entonces si no hay nada escrito
  // queremos que se devuelva toda la lista de pokemones como hasta ahora:
  let string = text;
  let regex = new RegExp(string, "gi");
  let filtered = pokeinfo.filter(function (pokemon) {
    return pokemon.name.match(regex);
  });
  console.log(pokeinfo)

  // Una ves obtenido el filtrado (en este caso seria la constante filtered) podremos mostrarlos:
  return (
    <div className="pokecard-container">
      {filtered.map((pokemon) => {
        const borderColor = {
          border: `2px solid ${pokemon.primaryColor}`,
        };
        const colorId = {
          color: `${pokemon.primaryColor}`,
        };
        const colorName = {
          backgroundColor: `${pokemon.primaryColor}`,
        };

        return (
          <div className="card" style={borderColor} key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>
              <div className="id-card" style={colorId}>
                {pokemon.id}
              </div>
              <div className="img-card-container">
                <img src={pokemon.img} className="img-card" alt="pokemon-pic"/>
              </div>
              <div className="name-card" style={colorName}>
                {pokemon.name}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
