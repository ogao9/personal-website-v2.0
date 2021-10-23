import MetaHead from "../components/MetaHead"
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


export default function Contact() {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading ] = useState(false);

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e, field) =>{
        setFormValues({...formValues, [field]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <>
            <MetaHead title="Oliver Gao | Contact Me" description="Send me a message to contact me!"/>

            <main className="px-8 sm:pl-16 lg:pl-48 py-16">
                <section className="mb-16">
                    <h1 className="text-7xl font-semibold mb-4">Contact me.</h1>
                    <p className="text-xl">Send me a message! I would love to read it!</p>
                </section>

                <form className="max-w-lg " onSubmit={handleSubmit}>
                    <label className="block">
                        Name
                        <input
                            className="
                            mt-0
                            block
                            w-full
                            px-0.5
                            border-0 border-b-2 border-gray-200
                            focus:ring-0 focus:border-black
                            rounded
                            dark:bg-blacksurface
                            dark:border-black"
                            type="text"
                            value={formValues.name}
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
                            focus:ring-0 focus:border-black
                            rounded
                            dark:bg-blacksurface
                            dark:border-black"
                            type="text"
                            value={formValues.email}
                            onChange={(e) => handleChange(e, "email")}
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
                            focus:ring-0 focus:border-black
                            rounded
                            dark:bg-blacksurface
                            dark:border-black"
                            value={formValues.message}
                            onChange={(e) => handleChange(e, "message")}
                            required
                        />
                    </label>

                {loading ? 
                    <button className="w-20 py-2 bg-blue-500 rounded flex justify-center" disabled>
                        <FontAwesomeIcon icon={faSpinner} className="w-5 animate-spin"/>
                    </button> 
                :   <button type="submit"  className="bg-black text-white dark:bg-gray-800 hover:opacity-80 px-5 py-2 mt-8">
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