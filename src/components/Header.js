import React from 'react'
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
export default function Header() {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Streamy
            </Link>
           <div className="right menu">
               <Link to="/" className="item">
                   All Streams
               </Link>
               <GoogleAuth />
           </div>
        </div>
    )
}




// 1001322347912-f7k6n76mghejmio4hb9qhtcrbr0jmt63.apps.googleusercontent.com