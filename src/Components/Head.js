import React from 'react';
import { Helmet } from 'react-helmet';

function Head(){
    return(
        <div>
        <Helmet>
          <title>A-Byte-Better</title>
          <meta name="description" content="Computer Repair Service. Computer Store. Electronics. Youtube Channel."></meta>
          <link rel="icon"  href="/favicon.ico"/>
        </Helmet>
      </div>
      )
}

export default Head;