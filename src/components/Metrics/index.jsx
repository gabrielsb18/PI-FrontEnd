import { GrapicTasks } from "./GrapicTasks/GrapicTasks";
import { TotalCompletedTasks } from "./TotalCompletedTasks/TotalCompletedTasks";
import { TotalPendingTasks } from "./TotalPendingTasks/TotalPendingTasks";
import { ContainerGraphics } from "./Metrics.styles.js";

function Metrics() {
	return (
		<ContainerGraphics>
			<GrapicTasks />
			<TotalPendingTasks />
			<TotalCompletedTasks />
		</ContainerGraphics>
	);
}

export { Metrics };
