import React from 'react';
import users from './user-data'; 
import './userdata.css';

const UserData = () => {
    return ( 
    <div className="columns user-container">
        <div>
          <h2 className="is-size-4">Loop Over an Array of Data</h2>
        </div>
        <div className="users">

          {users.map((user, index) => 
              <div key ={index}>
                {index}
               <p>{user.name}</p>
               <p>{user.location}</p>
               <p>{user.car}</p>
              </div>
          ) }

        </div>
    </div>
     );
}
export default UserData;