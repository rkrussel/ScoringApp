import { Router } from "./src/Router";
import { Text, View } from "react-native";
import { AuthProvider } from "./src/auth/AuthProvider";

export default function App() {
	return (
		<AuthProvider>
			<Router />
		</AuthProvider>
	);
}
