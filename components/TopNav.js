import Link from 'next/link';
import { useState } from 'react'
import useWindowDimensions from './useWindowDimesions';
import ThemeToggler from './ThemeToggler';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function TopNav() {
    const[open, setOpen] = useState(false);
    const {width, height} = useWindowDimensions();

    return (
        <nav className="md:flex justify-between items-center">
            <div className="md:flex">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <a id="logo" className="block bg-black hover:bg-yellow-400 text-white tracking-widest text-3xl px-6 py-4 mr-4">
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

                
                <>
                    <Link href="/projects">
                    <a className="block px-8 py-4 text-center text-lg">
                        Projects
                    </a>
                    </Link>
                    <Link href="/about">
                        <a className="block px-8 py-4 text-center text-lg">
                            About
                        </a>
                    </Link>
                    <Link href="/blog">
                        <a className="block px-8 py-4 text-center text-lg">
                            Blog
                        </a>
                    </Link>
                </>
                
            </div>

            <div className="hidden p-6 px-8 md:block">
                <ThemeToggler/>
            </div>
        </nav>
    )
}
