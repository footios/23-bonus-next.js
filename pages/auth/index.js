import React from 'react';
import User from '../../components/User'

const authPage = (props) => {
    return ( 
        <div>
            <h1>The auth page - {props.appName} </h1>
            <User name='fotis' age={42} country='Greece' occupation='none' />
        </div>
     );
}
 
authPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({appName: 'Super App (Auth)'})
        } , 1000)
    })
    return promise
}
export default authPage;