import { useState } from 'react';
import { UncontrolledForm } from './UncontrolledForm';
import { ControlledForm } from './ControlledForm';
import { UncontrolledModal } from './UncontrolledModal';
import { ControlledModal } from './ControlledModal';
import { UncotrolledOnboardingFlow } from './UncontrolledOnboardingFlow';

const StepOne = () => <h1>Step 1</h1>;
const StepTwo = () => <h1>Step 2</h1>;
const StepThree = () => <h1>Step 3</h1>;

function App() {
	return (
		<UncotrolledOnboardingFlow>
			<StepOne />
			<StepTwo />
			<StepThree />
		</UncotrolledOnboardingFlow>
	);
}

export default App;
