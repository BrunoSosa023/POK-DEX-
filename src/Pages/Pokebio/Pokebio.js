import React from 'react';
import { Link, useParams} from "react-router-dom";
import Pokestats from "../../Components/Stats/Pokestats";
import "./Pokebio.css"

export default function Pokebio({pokeinfo, setPokeinfo}) {
  const params = useParams;

  // PokeName dará como resultado el nombre del pokemon
  const PokeName = params().name;

  // info será el resultado de filtrar Pokeinfo, se filtrará el objeto
  // cuyo nombre sea igual a Pokename, dando el objeto con toda la informacion del pokemon
  const info = pokeinfo.filter((pokemon) => pokemon.name === PokeName);
  // Para obtener la informacion debemos ahora llamar a info[0] porque se guardó el objeto
  // en la posicion 0 del array

  const background = {
    backgroundColor: `${info[0].primaryColor}`,
  };

  const aboutColor = {
    color:  `${info[0].primaryColor}`,
  };

  let index = pokeinfo.indexOf(info[0]);

  const changePokemonLeft = () => {
    if (index === 0) {
      return `${pokeinfo[pokeinfo.length - 1].name}`;
    } else {
      return `${pokeinfo[index - 1].name}`;
    }
  };

  const changePokemonRight = () => {
    if (index === pokeinfo.length - 1) {
      return `${pokeinfo[0].name}`;
    } else {
      return `${pokeinfo[index + 1].name}`;
    }
  };

  return (
    <div className='poke-total'>
      <div className="Pokebio-container" style={background}>
        <div className="header">
          <div className="arrow-name">
            {/* Falta cambiarle el color a blanco, no sé como cambiar el color de un svg */}
            <Link to="/">
            <img
              src="/Images/arrow-left.svg"
              className="arrow-left"
              alt="Arrow left"
            />
            </Link>
            <h1 className="name-pokemon">{info[0].name}</h1>
          </div>
          <div className="id">{info[0].id}</div>
        </div>
        <img src='/Images/Pokeball_1.png' alt='pokeball-white' className='white-pokeball'/>
        <div className='poke-foto'>
        <Link to={`/pokemon/${changePokemonLeft()}`}> 
      <button className='arrowButton2'> {"<"} </button>
      </Link>
          <img src={info[0].img.toString()} alt="pokemon"/>
          <Link to={`/pokemon/${changePokemonRight()}`}> 
      <button className='arrowButton2'> {">"} </button>
      </Link>
        </div>
          <Pokestats info={info} aboutColor={aboutColor} pokeinfo={pokeinfo} />
      </div>
    </div>
  );
}
       
           



