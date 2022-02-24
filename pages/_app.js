import "bootstrap/dist/css/bootstrap.css"
import '../styles/globals.css'

import { UserProvider } from '@auth0/nextjs-auth0';
import React from 'react';
import Layout from '../Components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider {...pageProps}>
      <Layout {...pageProps}>
      <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
