import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDidMountEffect = (func: React.EffectCallback) => {
	const didMount = useRef(true);

	useLayoutEffect(() => {
		let unmount: any;

		if (didMount.current) {
			unmount = func();
			didMount.current = false;
		} else {
			// didUpdate
		}
		return () => {
			unmount && unmount();
		};
	});
};

export const useViewport = () => {
	const [vw, setVW] = useState(0);
	const [vh, setVH] = useState(0);

	useEffect(() => {
		const setSizes = () => {
			if (window.innerWidth !== vw) {
				setVW(window.innerWidth);
			}
			if (window.innerHeight !== vh) {
				setVH(window.innerHeight);
			}
		};
		setSizes();
		window.addEventListener('resize', setSizes);
		return () => window.removeEventListener('resize', setSizes);
	}, [vh, vw]);
	return { vw, vh };
};
