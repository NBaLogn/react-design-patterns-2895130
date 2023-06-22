import React, { useState } from 'react';

export const UncotrolledOnboardingFlow = ({ children, onFinish }) => {
	const [onBoardingData, setOnboardingData] = useState();
	const [currentIndex, setCurrentIndex] = useState(0);

	const currentChild = React.Children.toArray(children)[currentIndex];

	return (
		<>
			{currentChild}
			<button>Previous</button>
			<button>Previous</button>
		</>
	);
};
