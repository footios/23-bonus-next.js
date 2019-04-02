import React, { Component } from 'react';
import Link from 'next/link'
import Router from 'next/router'
import { log } from 'util';

class indexPage extends Component {
    // also available in functional components
    static async getInitialProps(context) {
        console.log(context);
        
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({appName: 'Super App'})
            } , 1000)
        })
        return promise
    }
    
    render() { 
        return ( 
            <div>
            <h1>The main page of {this.props.appName} </h1>
            <p>Got to <Link href='/auth' ><a>Auth</a></Link></p>
            <button onClick={() => Router.push('/auth')} >Go to Auth</button>
        </div>
         );
    }
}
 
export default indexPage;

