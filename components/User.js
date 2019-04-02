import React from 'react';

const user = (props) => {
    return ( 
        <div>
            <h1>{props.name}</h1>
            <p>Age: {props.age} </p>
            <p>Country: {props.country} </p>
            <p>Occupation: {props.occupation} </p>
        </div>
     );
}
 
export default user;
