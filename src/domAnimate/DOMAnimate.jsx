import React, {useState} from 'react';
import './dom.css';

const DOMAnimate = () => {
    const [offsetTop, setOffsetTop] = useState(300);

    function moveBoxUp (){
        setOffsetTop(offsetTop - 50);
    }
    return ( 
        <div className="column dom">
            <h>Move the Box !</h>
            <br/>
            <button onClick={moveBoxUp} > Move Up </button>
            <div className= "box" style={{
                transform: `translateY(${offsetTop}px)`
            }}
             />
        </div>
     );
}
 
export default DOMAnimate;