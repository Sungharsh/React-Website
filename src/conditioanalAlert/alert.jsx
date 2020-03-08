import React, {useState} from 'react';
import '../App.css';

const Alert = () => {
    const [phrase, setPhrase] = useState('');
    if(phrase === 'sunny'){
        alert('Sunny is shining');
    };
    return ( 
        <div className="column">
        <br/>
        <h className="is-size-4">Enter the Secrate phrase sunny to see the alert</h> 
        <br/>
        <input type="text" placeholder="Enter Message" value={phrase} onChange={e => setPhrase(e.target.value)} />
        </div>
     );
}
export default Alert;