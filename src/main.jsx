import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Routes } from "./routes/index.jsx";

import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import { AuthProvider } from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</ThemeProvider>
	</StrictMode>,
);
