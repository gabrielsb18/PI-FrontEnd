import { toast } from "sonner";
import { getMetrics } from "../../../services/metricsService.js";
import { ContentGraphicTree } from "./TotalCompletedTasks.styles.js";
import { useEffect, useState } from "react";

export function TotalCompletedTasks() {
	const [totalTasks, setTotalTasks] = useState();

	useEffect(() => {
		const getTotalCompletedTasks = async () => {
			try {
				const response = await getMetrics();
				setTotalTasks(response.concluida);
			} catch (error) {
				toast.error(error.message);
			}
		};

		getTotalCompletedTasks();
	}, []);

	return (
		<ContentGraphicTree>
			<p>
				Tarefas <br /> <strong>Concluídas</strong>
			</p>
			<h1>+{totalTasks}</h1>
		</ContentGraphicTree>
	);
}
