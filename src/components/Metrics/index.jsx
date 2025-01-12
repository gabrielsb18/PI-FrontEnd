import { GrapicTasks } from "./GrapicTasks/GrapicTasks";
import { TotalCompletedTasks } from "./TotalCompletedTasks/TotalCompletedTasks";
import {
	TotalPendingTasks,
} from "./TotalPendingTasks/TotalPendingTasks";
import { ContainerGraphics } from "./Metrics.styles.js";
import { SkeletonMetrics } from "../Skeletons/SkeletonMetrics/SkeletonMetrics";
import { useMetrics } from "../../contexts/MetricsContext.jsx";

function Metrics() {
	const { loading } = useMetrics();

	return (
		<ContainerGraphics>
			{loading ? (
				<SkeletonMetrics />
			) : (
				<>
					<GrapicTasks />
					<TotalPendingTasks />
					<TotalCompletedTasks />
				</>
			)}
		</ContainerGraphics>
	);
}

export { Metrics };
