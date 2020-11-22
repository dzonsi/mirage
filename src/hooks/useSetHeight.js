import { useEffect } from "react";

export const useSetHeight = (par, chi, interval) => {

	useEffect(() => {

		const parent = document.getElementById(par);
		const child = document.getElementById(chi);

		const childComputed = window.getComputedStyle(child);

		parent.style.height = `${parseInt(childComputed.height) + parseInt(childComputed.marginTop)}px`;

		let prevValue = childComputed.height;

		const setHeight = setInterval(() => {

			const newComputed = window.getComputedStyle(child);

			let nextValue = newComputed.height;

			if(prevValue == nextValue) {
				clearInterval(setHeight);
				parent.style.height = `${nextValue}px`;
			} else {
				prevValue = nextValue;
			}

		}, interval);

	}, []);

}