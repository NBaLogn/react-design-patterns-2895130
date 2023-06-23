import React, { useState, useEffect } from 'react';
import axios from 'axios';

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const withEditableResource = (Component, resourcePath, resoureName) => {
	return (props) => {
		const [originalData, setOriginalData] = useState(null);
		const [data, setData] = useState(null);

		useEffect(() => {
			(async () => {
				const response = await axios.get(resourcePath);
				setOriginalData(response.data);
				setData(response.data);
			})();
		}, []);

		const onChange = (changes) => {
			setData({ ...data, ...changes });
		};

		const onSave = async () => {
			const response = await axios.post(resourcePath, { [resoureName]: data });
			setOriginalData(response.data);
			setData(response.data);
		};

		const onReset = () => {
			setData(originalData);
		};

		const resourceProps = {
			[resoureName]: data,
			[`onChange${capitalize(resoureName)}`]: onChange,
			[`onSave${capitalize(resoureName)}`]: onSave,
			[`onReset${capitalize(resoureName)}`]: onReset,
		};

		return (
			<Component
				{...props}
				{...resourceProps}
			/>
		);
	};
};
