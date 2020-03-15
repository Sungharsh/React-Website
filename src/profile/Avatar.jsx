import React from 'react';

const Avatar = () => {
    const AvatorImage = 'https://avatars1.githubusercontent.com/u/11149124?v=4'
    return ( 
        <React.Fragment>
                <p>
                <img className="image" src={AvatorImage} alt="Avator"/>
              </p>
        </React.Fragment>
     );
}
 
export default Avatar;