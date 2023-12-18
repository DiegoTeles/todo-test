/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-globals */

'use client';

import InformationTask from '@/components/InformationTask';
import InputItem from '@/components/InputItem';
import Item from '@/components/Item';
import useTaskStatistics from '@/hooks/useTaskStatistics';
import React, { useEffect, useState } from 'react';

type Todos = {
	id: number;
	task: string;
	isComplete: boolean;
};

export default function Home() {
	const [todos, setTodos] = useState<Todos[]>([]);
	const { totalTasks, pendingPercentage, completedPercentage } =
		useTaskStatistics(todos);

	useEffect(() => {
		const getTodoStorage = localStorage.getItem('todo-list');
		if (getTodoStorage) {
			setTodos(JSON.parse(getTodoStorage));
		}
	}, []);

	useEffect(() => {
		if (todos.length) {
			localStorage.setItem('todo-list', JSON.stringify(todos));
		}
	}, [todos]);

	const addTask = (task: string) => {
		const newTask = {
			id: todos.length + 1,
			task,
			isComplete: false,
		};
		setTodos(prevState => [...prevState, newTask]);
	};

	const completeTask = (taskId: number) => {
		setTodos((prevTodos: Todos[]) => {
			const updatedTasks = prevTodos.map(task => {
				if (task.id === taskId) {
					return {
						...task,
						isComplete: true,
					};
				}
				return task;
			});

			const sortedTasks = updatedTasks.sort((a, b) =>
				a.isComplete === b.isComplete ? 0 : a.isComplete ? 1 : -1,
			);

			return sortedTasks;
		});
	};

	return (
		<main className="flex justify-center mt-[50px]">
			<div>
				<h1 className="p-6 text-center text-2xl font-bold uppercase">
					Lista de Tarefas
				</h1>
				<InformationTask
					totalTasks={totalTasks}
					completedPercentage={completedPercentage}
					pendingPercentage={pendingPercentage}
				/>

				<InputItem addTask={addTask} />

				{todos &&
					todos
						.sort((a, b) => (a.isComplete ? 0 : b.isComplete ? -1 : 1))
						.map(({ task, id, isComplete }: Todos) => (
							<div key={`task-${id}`}>
								<Item
									task={task}
									completeTask={() => completeTask(id)}
									isCompleted={isComplete}
								/>
							</div>
						))}
			</div>
		</main>
	);
}
