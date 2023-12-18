/* eslint-disable no-restricted-globals */
import { useEffect, useState } from 'react';

type Todos = {
	id: number;
	task: string;
	isComplete: boolean;
};
const useTaskStatistics = (todos: Todos[]) => {
	const [totalTasks, setTotalTasks] = useState(0);
	const [pendingPercentage, setPendingPercentage] = useState(0);
	const [completedPercentage, setCompletedPercentage] = useState(0);

	useEffect(() => {
		setTotalTasks(todos.length);

		const pendingCount = todos.filter(task => !task.isComplete).length;
		const completedCount = todos.filter(task => task.isComplete).length;

		const pendingPercentageVal = Math.floor((pendingCount / todos.length) * 100);
		const completedPercentageVal = Math.floor(
			(completedCount / todos.length) * 100,
		);

		setPendingPercentage(isNaN(pendingPercentageVal) ? 0 : pendingPercentageVal);
		setCompletedPercentage(
			isNaN(completedPercentageVal) ? 0 : completedPercentageVal,
		);
	}, [todos]);

	return {
		totalTasks,
		pendingPercentage,
		completedPercentage,
	};
};

export default useTaskStatistics;
