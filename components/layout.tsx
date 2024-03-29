import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const name = 'Giulio Sá'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
    return (
        <div className="container mx-auto px-4 grid place-content-center">
            <Head>
                <title>Giulio Sá</title>
                <link rel="icon" href="/favicon.ico" />

                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />  
            </Head>

            <header >
                {home ? (
                    <>
                        <Image 
                        priority
                        src="/images/profile.jpg"
                        height={144}
                        width={144}
                        alt=""
                        />
                        <h1>{name}</h1>
                    </>
                    ) : (
                    <>
                        <Link href="/">
                        <Image
                            priority
                            src="/images/profile.jpg"
                            height={108}
                            width={108}
                            alt=""
                        />
                        </Link>
                        <h2 >
                        <Link href="/">
                            {name}
                        </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
        </div>
    )
}
