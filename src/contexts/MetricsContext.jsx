import { useContext, createContext, useEffect, useState } from "react";
import { getMetrics } from "../services/metricsService";

export const MetricsContext = createContext({});

function MetricsProvider({ children }) {
	const [totalTasks, setTotalTasks] = useState({});
	const [loading, setLoading] = useState(false);
	
	useEffect(() => {
		const acessToken = localStorage.getItem("@Notes:token");
		if (acessToken) {
			const getTotalPendingTasks = async () => {
				setLoading(true);
				try {
					const response = await getMetrics();
					const {pendente, concluida} = response;
					setTotalTasks(prevstate => ({
						...prevstate,
						pendente,
						concluida
					}));
				} catch (error) {
					return error.message;
				} finally {
					setLoading(false)
				}
			};
			getTotalPendingTasks();
		}
	}, []);

	const context = {
		totalTasksPending: totalTasks.pendente,
		totalTasksCompleted: totalTasks.concluida,
		loading
	}	

	return (
		<MetricsContext.Provider value={context}>
			{children}
		</MetricsContext.Provider>
	);
}

function useMetrics() {
	const contextMetrics = useContext(MetricsContext);
	return contextMetrics;
}

export { useMetrics, MetricsProvider };