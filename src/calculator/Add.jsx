import React, {useState} from 'react';
import '../App.css';

const Add = () => {
    const [firstValue, setFirst] = useState();
    const [secondValue, setSecond] = useState();
    const [TotalNumbers, setTotal] = useState( firstValue + secondValue);

    const AddNumbers = () =>{
        setTotal(parseInt(firstValue) + parseInt(secondValue));
    }

    return ( 
        <div className="column">
        <br/>
        <h className="is-size-4">Enter numbers click to add</h>
        <br/>
        <input type="number" placeholder="0" value={firstValue} onChange={e => setFirst(e.target.value) } />
        <input type="number" placeholder="0" value={secondValue} onChange={e =>setSecond(e.target.value) }  />
        <br/>
        <button onClick={AddNumbers} >Add</button>
        <br/>
        <input type="number" value={TotalNumbers} />
        </div>
     );
}
 
export default Add;