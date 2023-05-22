import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "./auth/AuthProvider";
import { AppStack, AuthStack } from "./screens/Stacks";

export const Router = () => {
	const authData = useAuth();

	return (
		<NavigationContainer>
			{authData ? <AuthStack /> : <AppStack />}
		</NavigationContainer>
	);
};
