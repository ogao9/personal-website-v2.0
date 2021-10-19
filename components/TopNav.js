import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import ThemeToggler from './ThemeToggler';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function TopNav() {
    const router = useRouter()
    const[open, setOpen] = useState(false);

    return (
        <nav className="md:flex justify-between items-center">
            <div className="md:flex items-center">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <a id="logo" className="block bg-black hover:bg-m-blue text-white tracking-widest text-3xl px-6 py-4 mr-4">
                            OliverGao
                        </a>
                    </Link>
                    <div>
                        <span className="inline-block p-4 md:hidden">
                            <ThemeToggler/>
                        </span>
                        <button className="inline-block p-4 md:hidden" onClick={()=>setOpen(!open)}>
                            <FontAwesomeIcon icon={faBars} className="w-6 inline"/>
                        </button>
                    </div>
                </div>


                <Link href="/projects">
                <a className={`top-nav-link ${!open ? 'nav-link-hide' : ''} ${router.pathname.startsWith('/projects') ? "activeLink" : "" }`}>
                    Projects
                </a>
                </Link>
                <Link href="/about">
                    <a className={`top-nav-link ${!open ? 'nav-link-hide' : ''} ${router.pathname === '/about' ? "activeLink" : "" } `}>
                        About
                    </a>
                </Link>
                <Link href="/blog">
                    <a className={`top-nav-link ${!open ? 'nav-link-hide' : ''} ${router.pathname.startsWith('/blog') ? "activeLink" : "" } `}>
                        Blog
                    </a>
                </Link>
            </div>

            <div className="hidden p-6 px-8 md:block">
                <ThemeToggler/>
            </div>
        </nav>
    )
}
