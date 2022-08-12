import '../public/css/global.css'
import Layout from '../components/layout'

import { appWithTranslation } from 'next-i18next';

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(MyApp);