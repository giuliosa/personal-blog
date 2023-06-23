import Link from 'next/link'

export default function HomePage() {
    return (
        <section>     
            <Link href="/posts/first-post">
                Posts    
            </Link>       
        </section>
    )
}