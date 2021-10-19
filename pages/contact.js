import MetaHead from "../components/MetaHead"
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


//maybe this time we should send contact form submissions to notion
export default function Contact() {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading ] = useState(false);

    return (
        <>
            <MetaHead title="Oliver Gao | Contact" description="Send me a message to contact me!"/>

            <main className="px-12 lg:pl-48 pt-24 ">
                <section className="mb-16">
                    <h1 className="text-7xl font-semibold mb-4">Contact me.</h1>
                    <p className="text-xl">Send me a message! I would love to read it!</p>
                </section>

                <form className="max-w-lg">
                    <label className="block">
                        Name
                        <input
                            className="
                            mt-0
                            block
                            w-full
                            px-0.5
                            border-0 border-b-2 border-gray-200
                            focus:ring-0 focus:border-black"
                            type="text"
                            onChange={(e) => handleChange(e, "name")}
                            required
                        />
                    </label>
                    <label className="block mt-6">
                        Email address
                        <input
                            className="
                            mt-0
                            block
                            w-full
                            px-0.5
                            border-0 border-b-2 border-gray-200
                            focus:ring-0 focus:border-black"
                            type="text"
                            onChange={(e) => handleChange(e, "name")}
                            placeholder="name@email.com"
                            required
                        />
                    </label>
                    <label className="block mt-6">
                        Message
                        <textarea
                            className="
                            mt-0
                            block
                            w-full
                            px-0.5
                            border-0 border-b-2 border-gray-200
                            focus:ring-0 focus:border-black"
                            onChange={(e) => handleChange(e, "name")}
                            required
                        />
                    </label>

                {loading ? 
                    <button className="w-20 py-2 bg-blue-500 rounded flex justify-center" disabled>
                        <FontAwesomeIcon icon={faSpinner} className="w-5 animate-spin"/>
                    </button> 
                :   <button type="submit" className="bg-black text-white hover:opacity-90 px-5 py-2 mt-6">
                        Send
                    </button>
                }

                {success && 
                    <div className="bg-green-100 text-black-text border-2 border-green-700 rounded px-3 py-2 mt-2 animate-toast">
                        <b>Success!</b> Your message was sent!
                    </div> }

                {error &&
                    <div className="bg-red-100 text-black-text border-2 border-red-700 rounded px-3 py-2 mt-2 animate-toast">
                        <b>Error!</b> {error}
                    </div>}
                </form>

            </main>
        </>
    )
}