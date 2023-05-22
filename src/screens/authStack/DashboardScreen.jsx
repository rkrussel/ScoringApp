import React from "react";
import { View, Text, Button } from "react-native";
import { useLogout } from "../../auth/AuthProvider";

const DashboardScreen = () => {
	const logOut = useLogout();

	return (
		<View className="bg-black py-20">
			<Text className="text-white">asdfasdfasdf</Text>
			<Button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onPress={logOut}
				title="Log Out"
				accessibilityLabel="Log Out Button"
			/>
		</View>
	);
};

export default DashboardScreen;
