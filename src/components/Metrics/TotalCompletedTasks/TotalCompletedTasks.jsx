import { ContentGraphicTree } from "./TotalCompletedTasks.styles.js";
import { useMetrics } from "../../../contexts/MetricsContext.jsx";

export function TotalCompletedTasks() {
	const { totalTasksCompleted } = useMetrics();

	return (
		<ContentGraphicTree>
			<p>
				Tarefas <br /> <strong>Concluídas</strong>
			</p>
			<h1>+{totalTasksCompleted}</h1>
		</ContentGraphicTree>
	);
}
