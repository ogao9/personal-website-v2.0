import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
	return (
		<footer className="flex justify-between dark:bg-darkmodebg dark:text-darkmodetext p-5">
			<p>Created with <FontAwesomeIcon icon={faHeart} className="w-3 inline" /> by Me</p>
			<p>&copy; 2021 Oliver Gao</p>
		</footer>
	)
}
