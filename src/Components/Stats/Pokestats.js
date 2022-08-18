import React from 'react'
import "./Pokestats.css"
import ProgressBar from "@ramonak/react-progress-bar";

export default function Pokestats({info, aboutColor, pokeinfo}) {

  let index = pokeinfo.indexOf(info[0]);
  console.log(index);
  // console.log(pokeinfo[pokeinfo.length - 1].name);

  

  return (
       
    <div className='poke-stats'>
    <div className='poke-type-container'> 

    {info[0].type.map((type, i) => {
      if (i === 0) {
        return (
          <div
            className="poke-type"
            style={{ backgroundColor: `${info[0].primaryColor}` }}
          >
            {type}
          </div>
        );
      } else {
        return (
          <div
            className="poke-type"
            style={{ backgroundColor: `${info[0].secondaryColor}` }}>
            {type}
          </div>
        );
      }
    })}
    </div>
      <div className='about-arrows'>
        <h2 className='about' style={aboutColor}>About</h2>
      </div>
      <div className='poke-physics'>
        <div className='physics-container'>
          <div className='img-value'>
           <img src='/Images/Weight.svg' alt='weight-pic' className='weight-pic'/>
           <h3>{info[0].weight}</h3>
         </div>
        <h4>Weight</h4>
      </div>
        <div className='grey-line'></div>
        <div className='physics-container'>
        <div className='img-value'>
         <img src='/Images/Height.svg' alt='weight-pic' className='height-pic'/>
         <h3>{info[0].height}</h3>
        </div>
         <h4>Height</h4>
        </div>
        <div className='grey-line'></div>
      <div className='physics-container'>
      <div>
      <div className='img-value'>
        <h3>{info[0].moves}</h3>
      </div>
        </div>
        <h4>Moves</h4>
      </div>
    </div>
      <p className='poke-description'>{info[0].description}</p>
      <h2 className='base-stats' style={aboutColor}>Base Stats</h2>
      <div className='stats-container'>
        {info[0].stats.map((stat) => {
          return (
            <div className='base-stats-line'>
              <div className='stat-name'>              
                <h5 style={{color:`${info[0].primaryColor}`}}>{stat.name}</h5>
                </div>
                <div className='vertical-line'></div>
                <div className='stat-value'>
                <p>{stat.value}</p>
                </div>
                <div className='stat-bar'>
              <ProgressBar
                completed={parseInt(`${stat.value}`)}
                min="0"
                max="220"
                customLabel=" "
                bgColor={info[0].primaryColor}
                className="bar"
                height='5px'
              />
              </div>
            </div>
          );
        })}
      </div>
  </div>
  )
}
