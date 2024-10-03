import {useState} from "react";

const Cash = () => {
    let  [state, setstate] = useState(0);
    console.log(state);

    function count() {
        setstate(state+1);
        console.log(state);
        
    }
    
  return (
    <div>
         <h1>The Total Cash:{state}</h1>
         <button onClick={count}>increase</button>
    </div>
  )
}

export default Cash
