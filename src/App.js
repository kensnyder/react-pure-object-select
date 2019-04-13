import React, { useState } from 'react';
import { ObjectSelect } from './components/ObjectSelect.js';
import { WhatIsThis } from './components/WhatIsThis.js';

export function App() {
	const days = [
		{ id: 'sun', name: 'Sunday' },
		{ id: 'mon', name: 'Monday' },
		{ id: 'tue', name: 'Tuesday' },
		{ id: 'wed', name: 'Wednesday' },
		{ id: 'thu', name: 'Thursday' },
		{ id: 'fri', name: 'Friday' },
		{ id: 'sat', name: 'Saturday' },
	];
	const [day, setDay] = useState(days[2]);
	return (
		<section>
			<WhatIsThis />
			<ObjectSelect options={days} value={day} onChange={setDay} />
			<p>Chosen day code: {day.id}</p>
		</section>
	);
}
