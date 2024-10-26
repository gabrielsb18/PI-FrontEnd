import { Toaster } from "sonner";

export default function ToastPopUp() {
	<Toaster
		righColors
		position="top-right"
		toastOptions={{
			style: {
				padding: "24px 22px",
				FontFamily: "Inter",
				fontSize: "14px",
				border: "1px solid #f19696",
			},
		}}
		icons={{
			sucess: <div>🎉</div>,
			error: <div>🚫</div>,
		}}
	/>;
}
