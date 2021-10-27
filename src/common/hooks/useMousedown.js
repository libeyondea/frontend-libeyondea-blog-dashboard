import { useEffect, useRef } from 'react';
import useViewport from './useViewport ';

const useMousedown = (changeFunc, width) => {
	const wrapperRef = useRef(null);
	const { vw } = useViewport();

	useEffect(() => {
		function handleClickOutside(event) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				changeFunc(true);
			}
		}
		if (vw < width) {
			document.addEventListener('mousedown', handleClickOutside);
			return () => {
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}
	}, [changeFunc, vw, width, wrapperRef]);

	return { wrapperRef };
};

export default useMousedown;
