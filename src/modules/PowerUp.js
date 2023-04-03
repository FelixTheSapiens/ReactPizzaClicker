import purchaseSound from '../sounds/purchaseSound.mp3';
import { playSound, nicelyRounded } from '../utils';
import { useState, useEffect } from 'react';
import fingerGuns from '/img/fingerGuns.png';
import internCook from '/img/internCook.png';
import oven  from '/img/oven.png';

function PowerUp(props) {
  const hooks = props.hooks;
  const pizza = hooks.pizza;
  const click = hooks.click;
  const config = props.config;

  const img = {
    'fingerGuns' : fingerGuns,
    'internCook' : internCook,
    'oven' : oven
  }

  const [locked, setLocked] = useState(true);

  if (pizza.highscore >= config.price && locked) {
    setLocked(false);
  };

  const affordable = (pizza.get >= config.price) && true;

  const tryBuy = () => {
    if (!affordable) return;

    click.set(
      config.lvl++,
      config.profit = config.addProfit + (config.profit * config.profitMod),
      previous => previous + config.profit,
      pizza.set(count => count - config.price),
      config.price = config.addPrice + (config.price * config.priceMod));

    playSound(purchaseSound);
  };

  return (
    <div className={`powerUp ${locked && 'powerUpDisabled'} ${affordable ? 'affordable' : 'pricy'}`} onClick={tryBuy}>
      <h3>{config.name}</h3>
      <div>
        <img src={img[config.img]} />
        <p>{config.desc}</p>
      </div>
      <div className='prices'>
        <h6>LvL:</h6>
        <div>
          <h2>{config.lvl}</h2>
        </div>
        <h6>Clicking power:</h6>
        <div>
          <h2>+{nicelyRounded(config.profit)}</h2>
        </div>
        <h6>Price:</h6>
        <div>
          <h2>{nicelyRounded(config.price)}</h2>
        </div>
      </div>
    </div>
  );
}


export default PowerUp;