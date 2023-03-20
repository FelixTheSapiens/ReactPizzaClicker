function PowerUp(props) {
  const hooks = props.hooks;

  return (
    <>
    lol
      <div className='PowerUp'>
        <h3>{props.name}</h3>
        <img src={props.img}/>
        <p>{props.desc}</p>
        <h2>{props.profit}</h2>
        <h3>{props.price}</h3>
      </div>
    </>
  );
}


export default PowerUp;