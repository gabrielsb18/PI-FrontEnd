import { useEffect, useState } from "react";
import { ContentGraphicTwo } from "./TotalPendingTasks.styles.js";
import { getMetrics } from "../../../services/metricsService.js";
import { toast } from "sonner";

export function TotalPendingTasks() {
    const [totalTasks, setTotaltasks] = useState();

    useEffect(() => {
        const getTotalPendingTasks = async () => {
            try {
                const response = await getMetrics();
                setTotaltasks(response.pendente)
            } catch (error) {
                toast.error(error.message)
            }
        }

        getTotalPendingTasks();
    }, [totalTasks])

	return (
		<ContentGraphicTwo>
			<p>
				Tarefas <br /> <strong>Pendentes</strong>
			</p>
			<h1>{totalTasks}</h1>
		</ContentGraphicTwo>
	);
}
