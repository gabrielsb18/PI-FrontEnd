import { ContentGraphicsOne } from "./GrapicTasks.styles.js";
import Chart from "../Chart/index.jsx";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getMetrics } from "../../../services/metricsService.js";

export function GrapicTasks() {
	const [analyticsDataState, setAnalyticsDataState] = useState();

	useEffect(() => {
		const fechTotalTasksBytype = async () => {
			try {
				const response = await getMetrics();
				setAnalyticsDataState(response);
			} catch (error) {
				toast.error("Erro ao carregar os dados");
			}
		};

		fechTotalTasksBytype();
	}, []);

	const options = {
		title: {
			text: "",
			useHTML: false,
		},

		chart: {
			type: "areaspline",
			backgroundColor: null,
			spacingTop: 0,
			spacingRight: 0,
			spacingBottom: 0,
			spacingLeft: 0,
			margin: [0, 0, 0, 0],
		},

		xAxis: {
			gridLineWidth: 0,
		},

		yAxis: {
			gridLineWidth: 0,
		},

		tooltip: {
			useHTML: true,
			formatter: function () {
				const titles = [
					"Domingo",
					"Segunda-feira",
					"Terça-feira",
					"Quarta-feira",
					"Quinta-feira",
					"Sexta-feira",
					"Sábado",
				];

				return `
				<b>${titles[this.point.index]}</b><br>
				Tarefas Concluídas: ${this.y}
			  `;
			},
		},

		series: [
			{
				name: "Tarefas Concluídas",
				data: [20, 40, 20, 42, 20, 10, 12],
				fillColor: {
					linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
					stops: [
						[0, "#35FF89"],
						[1, "#32CD3200"],
					],
				},
				color: "#35FF89",
			},
		],

		legend: {
			enabled: false,
			itemStyle: {
				color: "#fff",
				fontSize: "12px",
			},
		},
	};

	return (
		<>
			<ContentGraphicsOne>
				<p>Seu Desempenho</p>
				<Chart options={options} />
			</ContentGraphicsOne>
		</>
	);
}
