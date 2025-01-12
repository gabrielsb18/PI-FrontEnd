import { ContentGraphicTwo } from "./TotalPendingTasks.styles.js";
import { useMetrics } from "../../../contexts/MetricsContext";

function TotalPendingTasks() {
	const { totalTasksPending } = useMetrics();

	return (
		<ContentGraphicTwo>
			<p>
				Tarefas <br /> <strong>Pendentes</strong>
			</p>
			<h1>{totalTasksPending}</h1>
		</ContentGraphicTwo>
	);
}

export { TotalPendingTasks };