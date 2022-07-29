import { default as HTMLHead } from "next/head";
import Nav from '../components/Header'
import Footer from '../components/Footer'

export default function BasicLayout({ children }) {
    return (
        <div className="bg-white text-black">
            <Head />
            <Nav className='sticky top-0'/>
            <div className="">{children}</div>
            <Footer />
        </div>
    );
}

function Head() {
    return (
        <HTMLHead>
            <title>Iterate Private Key</title>
            <meta name="title" content="IteratePrivateKey.com" />
            <meta
                name="description"
                content="Iterate Private Key."
            />

            {/* OG + Faceook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.IteratePrivateKey.com/" />
            <meta property="og:title" content="IteratePrivateKey.com" />
            <meta
                property="og:description"
                content="IteratePrivateKey.com"
            />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.IteratePrivateKey.com/" />
            <meta property="twitter:title" content="IteratePrivateKey.com" />
            <meta
                property="twitter:description"
                content="IteratePrivateKey.com"
            />
        </HTMLHead>
    );
}
