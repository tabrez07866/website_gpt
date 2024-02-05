import React from 'react';
import "./brand.css"
import {google,shopify,atlassian,slack,dropbox} from "./imports.js"

const Brand = () => {
  return (
    <div className='gpt__brand section__padding'>
        <div>
          <img src={google} alt="google" />
         </div> 
         <div>
         <img src={slack} alt="slack" />
         </div>
          <div>
          <img src={atlassian} alt="atlassian" />
          </div>
         <div>
         <img src={dropbox} alt="dropbox" />

         </div>
         <div>
         <img src={shopify} alt="shopify" />

         </div>

        
    </div>
  )
}

export default Brand