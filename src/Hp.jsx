import Lenovo from "./Lenovo";

const Hp=()=> {
    let ark =100;
    console.log(ark);
    
  return (
    <div className="hp">
      <h1>I am component</h1>
      <b>the ark is :{ark}</b>
      <Lenovo data={ark}/>
    </div>
  )
}

export default Hp
