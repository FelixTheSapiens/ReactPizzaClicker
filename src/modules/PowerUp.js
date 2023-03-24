import useState from "react";

function PowerUp(props) {
  const hooks = props.hooksList;
  const pizza = hooks.pizza;
  const config = props.config;

  const unlocked = (pizza.highscore < config.price) && true;
  const affordable = (pizza.count >= config.price) && true

  return (
    <div className={`powerUp ${unlocked && 'powerUpDisabled'} ${affordable && 'affordable'}`}>
      <h3>{config.name}</h3>
      <div>
        <img src={config.img}/>
        <p>{config.desc}</p>
      </div>
      <div className='prices'>
        <h6>LvL:</h6>
        <div>
          <h2>{config.lvl}</h2>
        </div>
        <h6>Clicking power:</h6>
        <div>
          <h2>{config.profit}</h2>
        </div>
        <h6>Price:</h6>
        <div>
          <h2>{config.price}</h2>
        </div>
      </div>
    </div>
  );
}


export default PowerUp;