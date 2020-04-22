import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

function Layout({ children,home }) {
  return (
    <div className={ styles.container }>
    <Head>
    <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
    </div>
  )
}

export default Layout