import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faInfoCircle} from '@fortawesome/free-solid-svg-icons'

export default function ProjectCard({projectInfo}) {
    const router = useRouter()

    return (
        <article className="project-card rounded border shadow-md hover:shadow-lg dark:bg-black-surface dark:border-black-surface">
            <section className="relative mb-3 overflow-hidden">
                <img
                    src="/big-house-oliver.png"
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