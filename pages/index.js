import Link from 'next/link'
import MetaHead from '../components/MetaHead'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
	return (
	<>
		<MetaHead title="Oliver Gao | Home" description="Oliver Gao is a student at the University of Michigan"/>


		<main className="pl-12 lg:pl-48 pt-24">
			<h1 className="text-7xl font-semibold mb-20">Hello! I'm Oliver.</h1>

			<h3 className="my-4 text-xl max-w-sm">I’m a student at the University of Michigan studying Data Science.</h3>

			<div className="flex justify-between w-96 mt-20 text-lg text-gray-700">
				<Link href="/projects">
					<a className="hover:text-blue-800 active:text-blue-900 focus:text-blue-900 arrow-shift">View my Projects
						<FontAwesomeIcon icon={faChevronRight} className="inline ml-2 w-3 text-yellow-400 arrow"/>
					</a>
				</Link>
				<Link href="/about">
					<a className="hover:text-blue-800 active:text-blue-900 focus:text-blue-900 arrow-shift">Learn about me
						<FontAwesomeIcon icon={faChevronRight} className="inline ml-2 w-3 text-yellow-400 arrow"/>
					</a>
				</Link>
			</div>
		</main>
	</>
	)
}
