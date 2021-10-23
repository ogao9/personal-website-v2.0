import Image from "next/image"
import Link from "next/link"
import MetaHead from "../components/MetaHead"
import { getAboutData, urlFor} from "../lib/sanity";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function About({aboutData}) {
    return (
        <>
            <MetaHead title="Oliver Gao | About"/>

            <main className="px-8 sm:pl-16 lg:pl-48 pt-24 pb-12">
                <h1 className="text-7xl font-semibold mb-16">About me.</h1>

                <div className="lg:flex flex-wrap">
                    <section className="lg:mr-12 2xl:mr-20 mb-8">
                        <p className="mb-8 text-lg max-w-xl">{aboutData.interests}</p>
                        <p className="mb-10 text-lg max-w-xl">{aboutData.funFacts}</p>

                        <p className="text-lg mb-1">Learn more about me: </p>
                        <div className="flex text-lg mb-2 ">
                            <Link href="resume.pdf">
                                <a target="_blank">
                                    <p className="mr-6 hover:text-m-maize"><FontAwesomeIcon icon={faFileAlt} className="inline w-4 mr-1"/>Resume&nbsp;</p>
                                </a>
                            </Link>
                            <a href="https://github.com/ogao9" className="learn-more" target="_blank" rel="noreferrer">
                                <p className="mr-6 hover:text-m-maize" ><FontAwesomeIcon icon={faGithub} className="inline w-4 mr-1"/>Github</p>
                            </a>
                        </div>
                        <div className="flex text-lg">
                            <a href="https://www.linkedin.com/in/oliver-gao-828682206"className="learn-more" target="_blank" rel="noreferrer">
                                <p className="mr-6 hover:text-m-maize"><FontAwesomeIcon icon={faLinkedin} className="inline w-4 mr-1"/>LinkedIn</p>
                            </a>
                            <Link href='/contact'>
                                <a className="learn-more">
                                    <p className="mr-6 hover:text-m-maize"><FontAwesomeIcon icon={faPaperPlane} className="inline w-4 mr-1"/>Contact Me</p>
                                </a>
                            </Link>
                        </div>
                    </section>
                    
                    <Image src={urlFor(aboutData.featuredImage).url()} 
                        alt="Featured Picture of Oliver Gao" 
                        width={400} height={400} 
                        className="rounded-lg" 
                    />
                </div>
            </main>
        </>
    )
}


export async function getStaticProps(){
    const aboutData = await getAboutData();

    return {
        props:{
            aboutData
        }
    }
}