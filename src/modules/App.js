import pizzaPic from '../img/pizza.png';
import clickSound from '../sounds/clickSound.wav';

import '../css/App.css';

import { nicelyRounded, playSound } from '../utils';
import { useState, useEffect } from 'react';
import PowerUp from './PowerUp';
import { powerConfigs as configs } from '../configs/powerConfigs';


function App() {

  const [pizzaCount, setPizzaCount] = useState(999);
  const [clickPower, setClickPower] = useState(0.1);
  const [highscore, setHighscore] = useState(0);
  const [powerUpConfigs, setPowerUpConfigs] = useState(configs);

  if (pizzaCount > highscore) {
    setHighscore(pizzaCount);
  }

  const clickPizza = () => {
    setPizzaCount(pizzaCount + clickPower);

    playSound(clickSound);
  };

  const hooks = {
    pizza: { get: pizzaCount, set: setPizzaCount, highscore: highscore },
    click: { get: clickPower, set: setClickPower }
  }

  const powerUps = powerUpConfigs.map(
    (powerUp, index) => <PowerUp key={index} config={powerUp} hooks={hooks} />)

  const pizzaEmoji = <span style={{ fontSize: '1.4rem' }}>🍕</span>;

  return (
    <div className='App'>
      <h1 className='pizzaCount'>{nicelyRounded(pizzaCount)}{pizzaEmoji}</h1>
      <button className='PizzaButton' onClick={clickPizza}>
        <img src={pizzaPic} alt="Pizza Button" />
      </button>
      <br />
      {powerUps}
    </div>
  );
}


export default App;