'use client';

import React, { useEffect, useState } from 'react';

interface OwnProps {
	totalTasks: number;
	completedPercentage: number;
	pendingPercentage: number;
}
export default function InformationTask({
	totalTasks,
	completedPercentage,
	pendingPercentage,
}: OwnProps) {
	const [completedColor, setCompletedColor] = useState<string>('green');
	const [pendingColor, setPendingColor] = useState<string>('green');

	useEffect(() => {
		const completedColorVal =
			completedPercentage >= 50 ? 'text-green-500' : 'text-red-500';
		const pendingColorVal =
			pendingPercentage >= 50 ? 'text-red-500' : 'text-green-500';

		setCompletedColor(completedColorVal);
		setPendingColor(pendingColorVal);
	}, [completedPercentage, pendingPercentage]);

	return (
		<div className="flex justify-around p-4 gap-20 mb-8">
			<div className="grid">
				<p className="font-medium text-gray-400 mb-2">Total de Tarefas</p>
				<p className="text-4xl font-bold">{totalTasks}</p>
			</div>
			<div>
				<p className="font-medium text-gray-400 mb-2">Concluidas</p>
				<p className={`text-4xl font-bold ${completedColor}`}>
					{completedPercentage} %
				</p>
			</div>
			<div>
				<p className="font-medium text-gray-400 mb-2">Pendentes</p>
				<p className={`text-4xl font-bold ${pendingColor}`}>
					{pendingPercentage} %
				</p>
			</div>
		</div>
	);
}
