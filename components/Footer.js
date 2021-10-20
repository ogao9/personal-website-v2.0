import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
	return (
		<footer className="p-4 flex justify-between">
			<p>Created with <FontAwesomeIcon icon={faHeart} className="w-3 inline" /> by Me</p>
			<p>&copy; 2021 Oliver Gao</p>
		</footer>
	)
}
