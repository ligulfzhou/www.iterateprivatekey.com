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

/**
 * Footer component
 * @returns {ReactElement} Footer
 */
// function Footer() {
//     return (
//         <footer className="body-font">
//             <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
//                 <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
//                     {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//                         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//                     </svg> */}
//                     <span className="ml-3 text-xl text-white invisible">Goscv Dashboard</span>
//                 </a>
//                 <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
//                 {/*<a href="https://twitter.com/Pixel__Knights" target="_blank" className="inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg">*/}
//                     {/*            <img src="/twitter.svg" className="w-5 h-5" />*/}
//                     {/*        </a>*/}
//                     {/*        <a href="https://discord.gg/kvyMYEWXes" target="_blank" className="inline-flex border-0 py-2 px-6 text-indigo-500 focus:outline-none rounded text-lg">*/}
//                     {/*            <img src="/discord.svg" className="w-5 h-5" />*/}
//                     {/*        </a>*/}
//                     {/* <a className="ml-3 ">
//                         <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
//                             <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//                         </svg>
//                     </a> */}
//                     {/* <a className="ml-3">
//                         <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
//                             <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
//                             <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
//                         </svg>
//                     </a> */}
//                     {/* <a className="ml-3 ">
//                         <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
//                             <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
//                             <circle cx="4" cy="4" r="2" stroke="none"></circle>
//                         </svg>
//                     </a> */}
//                 </span>
//             </div>
//         </footer>
//     );
// }
