import TopNav from "../components/TopNav"
import Image from "next/image"
import MetaHead from "../components/MetaHead"

export default function About() {
    return (
        <>
            <MetaHead title="Oliver Gao | About" description="A brief introduction"/>

            <main className="px-12 lg:pl-48 pt-24">
            <h1 className="text-7xl font-semibold mb-16">About me.</h1>

            <section className="lg:flex">
                <div className="lg:mr-20">
                    <p className="mb-8 text-lg max-w-xl">I'm a second-year student at the University of Michigan studying Data Science.
                    I'm interested in programming, working with data, and
                    seeing how modern technology can make a positive impact on some of our world's biggest challenges. </p>
                    <p className="mb-8 text-lg max-w-xl">When I’m not coding on my computer,
                    you can find me outside enjoying a run / walk / bike,
                    watching sports, or eating my favorite snack of pretzels and fruit.</p>
                </div>
                
                <Image src="/big-house-oliver.png" alt="Featured Picture of Oliver Gao" width={300} height={300} className="rounded-lg" />
            </section>

            
            </main>
        </>
    )
}
