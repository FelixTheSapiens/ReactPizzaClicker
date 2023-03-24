function PowerUp(props) {
  const hooks = props.hooks;
  const config = props.config;

  return (
    <>
      <div className='PowerUp'>
        <h3>{config.name}</h3>
        <img src={config.img}/>
        <p></p>
        <h2>{config.profit}</h2>
        <h3>{config.price}</h3>
      </div>
    </>
  );
}


export default PowerUp;