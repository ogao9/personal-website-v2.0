import { useRouter } from 'next/router'
import Link from 'next/link'

import { urlFor } from '../lib/sanity';


export default function ProjectCard({projectInfo}) {
    const router = useRouter()

    return (
        <article className="project-card rounded border shadow-md hover:shadow-lg dark:bg-black-surface dark:border-black-surface">
            <section className="relative mb-3 overflow-hidden">
                <img
                    src={urlFor(projectInfo.image).url()}
                    alt="Project Cover Photo"
                    className="object-cover"
                />
            </section>

            <section className="cursor-pointer mb-1 px-3" onClick={() => router.push(`/projects/${projectInfo.slug}`) }>
                <h2 className="text-2xl font-bold mb-1">{projectInfo.title}</h2>
                <p className="leading-snug">{projectInfo.excerpt}</p>
            </section>
        </article>
    );
}