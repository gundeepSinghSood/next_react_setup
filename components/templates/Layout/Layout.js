// @flow
import React from 'react';
import { useState } from 'react';
import Head from 'next/head';
// import dynamic from "next/dynamic";
// import HeadTag from '../../atoms/HeadTag';
import useHorizontal from '@oberon-amsterdam/horizontal/hook';
  
const Layout = ({ children, className }) => {
  const [container, setContainer] = useState();
  useHorizontal({ container: container });
  
return(
  <>
     <Head>
        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width, shrink-to-fit=no"
        />
        {/* {meta && <HeadTag metaData={meta} title={title} />} */}
      </Head>
       {/* <Header pageData={headerFooter} /> */}
      <main className={`container ${className || ''}`} ref={ref => { setContainer(ref) }}>
        {children}
      </main>
      {/* <Footer pageData={headerFooter} /> */}
    </>
)};

// Layout.defaultProps = {};

export default Layout;
