import { urlFor } from "../lib/sanity"
import { prettyDate, getReadingTime } from "../lib/utilities"

export default function BlogHomeStrip({postInfo}){

    return(
        <div className="flex items-center justify-between mb-8 max-w-2xl">
            <div className="flex-initial mr-4">
                <h1 className="text-lg sm:text-xl font-bold">{postInfo.title}</h1>
                <h3 className="hidden sm:block text-sm sm:text-base">{postInfo.excerpt}</h3>

                <section className="flex text-xs sm:text-sm text-gray-700 dark:text-gray-50 mt-2">
                    <p>{prettyDate(postInfo.publishedAt)} &middot;&nbsp;</p>
                    <p>{getReadingTime(postInfo.body)} &middot;&nbsp;</p>
                    <p className="bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-darkmodetext rounded-xl px-1 sm:px-2">
                        {postInfo.category}
                    </p>
                </section>
            </div>

            <div className="flex-shrink-0 w-20 sm:w-28 h-20">
                <img
                    src={urlFor(postInfo.image).url()}
                    alt="Blog Cover Image"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}