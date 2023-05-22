import HomeScreen from "./appStack/HomeScreen";
import RegisterScreen from "./appStack/RegisterScreen";
import DashboardScreen from "./authStack/DashboardScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const headerOptions = {
	headerStyle: { backgroundColor: "black" },
	headerTintColor: "white",
};

export const AppStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				//options={headerOptions}
			/>
			<Stack.Screen
				name="Register"
				component={RegisterScreen}
				//options={headerOptions}
			/>
		</Stack.Navigator>
	);
};

export const AuthStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Dashboard"
				component={DashboardScreen}
				//options={headerOptions}
			/>
		</Stack.Navigator>
	);
};
