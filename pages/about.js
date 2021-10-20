import Image from "next/image"
import MetaHead from "../components/MetaHead"
import { getAboutData, urlFor} from "../lib/sanity";

export default function About({aboutData}) {
    return (
        <>
            <MetaHead title="Oliver Gao | About" description="Write a better description here"/>

            <main className="px-12 lg:pl-48 pt-24">
                <h1 className="text-7xl font-semibold mb-16">About me.</h1>

                <section className="lg:flex flex-wrap">
                    <div className="lg:mr-12 xl:mr-20">
                        <p className="mb-8 text-lg max-w-xl">{aboutData.interests}</p>
                        <p className="mb-8 text-lg max-w-xl">{aboutData.funFacts}</p>
                        <p className="text-lg">Learn more about me: </p>
                    </div>
                    
                    <Image src={urlFor(aboutData.featuredImage).url()} 
                        alt="Featured Picture of Oliver Gao" 
                        width={300} height={300} 
                        className="rounded-lg" 
                    />
                </section>
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