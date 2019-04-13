import React from 'react';

export function ObjectSelect({
	options,
	value,
	onChange,
	labelField,
	...props
}) {
	// default binding values
	labelField = labelField || 'name';
	// validate binding values
	if (!Array.isArray(options)) {
		throw new Error(
			'<ObjectSelect options={?}> must be an array of objects',
		);
	}
	// setup
	const idx = options.indexOf(value);
	// render
	return (
		<select value={idx} onChange={onSelectChange} {...props}>
			{options.map((option, i) => (
				<option key={i} value={i}>
					{option[labelField]}
				</option>
			))}
		</select>
	);

	// define methods
	function onSelectChange(event) {
		onChange(options[event.target.value]);
	}
}

// DatePicker
// DateRangePicker
// DataTable
// FileUpload / Draggable
// FormGroup
// SearchInput
// ClearableInput
