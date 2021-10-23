import Link from 'next/link'
import MetaHead from '../components/MetaHead'
import { getHomeData } from '../lib/sanity'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Home({homeData}) {
	return (
		<>
			<MetaHead title="Oliver Gao | Home"/>

			<main className="px-6 sm:pl-16 lg:pl-48 pt-24">
				<h1 className="text-7xl font-semibold mb-16 sm:mb-20">
					{homeData.headline}
				</h1>

				<h3 className="text-xl max-w-sm my-4">
					{homeData.subheadline}
				</h3>

				<div className="flex flex-wrap items-center text-lg text-gray-700">
					<Link href="/projects">
						<a className="home-arrow mr-20 mt-12 sm:mt-20 ">
							View my Projects
							<FontAwesomeIcon icon={faChevronRight} className="inline ml-2 w-3 text-m-maize arrow"/>
						</a>
					</Link>
					<Link href="/about">
						<a className="home-arrow mr-4 mt-12 sm:mt-20">
							Learn about me
							<FontAwesomeIcon icon={faChevronRight} className="inline ml-2 w-3 text-m-maize arrow"/>
						</a>
					</Link>
				</div>
			</main>
		</>
	)
}


export async function getStaticProps(){
    const homeData = await getHomeData();

    return{
        props:{
            homeData
        }
    }
}