'use client';

import React, { useState } from 'react';

interface OwnProps {
	addTask: (task: string | undefined) => void;
}
export default function InputItem({ addTask }: OwnProps) {
	const [task, setTask] = useState<string>();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTask(event.target.value);
	};

	const handleAddTask = () => {
		addTask(task);
		setTask('');
	};

	return (
		<div className="flex justify-between gap-4 mb-12">
			<input
				className={`w-full border border-solid rounded px-2 py-1
					  border-gray-300 
				  `}
				type="text"
				value={task}
				onChange={handleChange}
				placeholder="Escreva uma nova tarefa"
			/>
			<button
				className={`border border-solid rounded px-10
					  border-blue-600  bg-blue-700 text-white font-bold
				  `}
				onClick={handleAddTask}>
				Adicionar
			</button>
		</div>
	);
}
