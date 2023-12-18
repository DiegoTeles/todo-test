import React from 'react';

interface OwnProps {
	task: string;
	isCompleted: boolean;
	completeTask: () => void;
}

export default function Item({ completeTask, task, isCompleted }: OwnProps) {
	return (
		<div className="flex w-full justify-between items-center h-16 my-2 mb-10 border-2 border-solid rounded py-1 px-4">
			<p>{task}</p>
			<div>
				{!isCompleted && (
					<button
						className={`border border-solid rounded px-2 py-2 font-bold
							bg-green-700 text-white
						  `}
						onClick={completeTask}>
						Completar
					</button>
				)}
			</div>
		</div>
	);
}
