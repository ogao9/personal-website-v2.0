import Image from "next/image"
import MetaHead from "../../components/MetaHead"
import ProjectCard from "../../components/ProjectCard"
export default function Projects() {
    return (
        <>
            <MetaHead title="Oliver Gao | Projects" description="A small collection of my projects"/>

            <section className="px-12 lg:pl-48 pt-24">
                <h1 className="text-7xl font-semibold mb-3">Projects.</h1>
                <p className="text-lg">A collection of my personal, research, and work projects. Includes write-ups!</p>
            </section>

            <section className="px-12 lg:pl-32 mt-36">
                <ProjectCardGrid projectInfo={projectInfo}/>
            </section>
        </>
    )
}

function ProjectCardGrid({projectInfo}){
    return(
        <section className="project-card-container">
            {
                projectInfo.map((project, idx)=>(
                    <ProjectCard key={idx} projectInfo={project}/>
                ))
            }
        </section> 
    )
}

const projectInfo = [
    {title: "Design.io",
    excerpt: "This is some filler text",
    slug: "design-io"
    },
    {title: "Design.io",
    excerpt: "This is some filler text",
    slug: "design-io"
    },
]