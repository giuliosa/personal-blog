import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
    return (
        <section className="text-center">     
            <Link href="/posts/first-post">
                Posts    
            </Link>       
            <p>Lvl 30 🎬💻🎨🎧📚🎮🏋️🍔🍩
            Casado com a melhor esposa de todas, pai de três fofuras sem igual</p>
            <p>
                (This is a sample website - you’ll be building a site like this on{' '}
                <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p>
        </section>
    )
}