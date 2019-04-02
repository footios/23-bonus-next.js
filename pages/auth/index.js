import React from 'react';
import User from '../../components/User'

const authPage = () => {
    return ( 
        <div>
            <h1>The auth page</h1>
            <User name='fotis' age={42} country='Greece' occupation='none' />
        </div>
     );
}
 
export default authPage;