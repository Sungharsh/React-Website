import React, { useState } from 'react';
import '../App.css';

function InputToOutput () {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

        return (
            <div className="column">
              <div>
                <h2 className="is-size-4">Update Data from an input</h2>
              </div>
        
              <div className="input-display">
                <p>Display Name: {name} </p>
                <div className="field">
                  <label className="label">Name: </label>
                  <input className="input" type="text" value = {name} placeholder="Type Name" onChange={e => setName(e.target.value) } />
                </div>
                <p>Display Age: {age} </p>

                <div className="field">
                  <label className="label">Age: </label>                
                  <input className="input" type="number" placeholder="Enter Age" onChange={e => setAge(+e.target.value)} />
                </div>

              </div>          
            </div>
          );
    
}
export default InputToOutput;