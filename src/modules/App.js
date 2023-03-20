import pizzaPic from '../img/pizza.png';
import clickSound from '../sounds/clickSound.wav';
import '../css/App.css';
import {nicelyRounded, playSound} from '../utils';
import {useState, useEffect} from 'react';
import PowerUp from './PowerUp';
import {powerConfigs} from '../configs/powerConfigs';


function App() {

  const [pizzaCount, setPizzaCount] = useState(0);
  const [clickPower, setClickPower] = useState(0.1);
  const [passiveIncome, setPassiveIncome] = useState(0.01);
  
  const hooks = {
    pizza: [pizzaCount, setPizzaCount],
    clickPower: [clickPower, setClickPower],
    passiveIncome: [passiveIncome, setPassiveIncome]
  }
 
  const clickPizza = () => {
    setPizzaCount(pizzaCount + clickPower);
    playSound(clickSound);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPizzaCount(pizzaCount => pizzaCount + passiveIncome);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const powerUps = powerConfigs.map(powerUp => <PowerUp config={powerUp} hooks={hooks}/>)

  return (
    <div className='App'>
      <h1 className='pizzaCount'>{nicelyRounded(pizzaCount)}</h1>
      <button className='PizzaButton' onClick={clickPizza}>
        <img src={pizzaPic} alt="Pizza Button" />
      </button>
      <br />
      {powerUps}
    </div>
  );
}


export default App;