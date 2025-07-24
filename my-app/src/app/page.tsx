import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Welcome to My App</h1>

            <p>This is a simple Next.js application.</p>
            <Link href="/categories">Go to Categories</Link>
        </div>
    );
}
