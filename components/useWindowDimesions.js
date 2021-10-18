import { useState, useEffect } from 'react';


export default function useWindowDimensions() {
	const [width, setWidth]   = useState(null);
	const [height, setHeight] = useState(null);


	useEffect(() => {
		const updateDimensions = () => {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		}

		window.addEventListener("resize", updateDimensions);

		return () => window.removeEventListener("resize", updateDimensions);
	}, []);

  return {width, height};
}