export const buildClassList = function (...params: string[]) {
	const flatten = params.reduce(
		(accumulator: string[], current: any): string[] => {
			// If the current item is an array, spread its elements into the accumulator
			if (Array.isArray(current)) {
				return [...accumulator, ...current];
			} else {
				// Otherwise, just push the single element into the accumulator
				return [...accumulator, current];
			}
		},
		[]
	);

	return flatten.filter(Boolean).join(' ');
};
