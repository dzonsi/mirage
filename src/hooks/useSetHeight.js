import { useEffect } from "react";

export const useSetHeight = (par, chi, interval) => {

	useEffect(() => {

		const parent = document.getElementById(par);
		const child = document.getElementById(chi);

		parent.style.height = `${child.getBoundingClientRect().height}px`;

		let prevValue = child.getBoundingClientRect().height;

		const setHeight = setInterval(() => {

			let nextValue = child.getBoundingClientRect().height;

			if(prevValue == nextValue) {
				clearInterval(setHeight);
				parent.style.height = `${nextValue}px`;
			} else {
				prevValue = nextValue;
			}

		}, interval);

	}, []);

}