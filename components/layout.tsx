import Head from 'next/head'

export const siteTitle = 'CleanApp'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Giulio Sá</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>{children}</main>
        </>
    )
}
