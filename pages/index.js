import React from 'react';
import Link from 'next/link'
import Router from 'next/router'

const indexPage = () => {
    return ( 
        <div>
            <h1>The main page</h1>
            <p>Got to <Link href='/auth' >Auth</Link></p>
            <button onClick={() => Router.push('/auth')} >Go to Auth</button>
        </div>
     );
}
 
export default indexPage;