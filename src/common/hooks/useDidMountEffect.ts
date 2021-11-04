import React, { useLayoutEffect, useRef } from 'react';

const useDidMountEffect = (func: React.EffectCallback) => {
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

export default useDidMountEffect;
