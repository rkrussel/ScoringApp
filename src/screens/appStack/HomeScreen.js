import React, { useState } from "react";
import { View, Text, TextInput, Pressable, SafeAreaView } from "react-native";
import { useLogin } from "../../auth/AuthProvider";

const HomeScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = useLogin();
	const handleRegisterPress = () => {
		navigation.navigate("Register");
	};

	return (
		<View className="bg-black h-screen">
			<Text className="text-lg self-center font-bold text-yellow-500">
				Login or Register
			</Text>
			<Text className="self-center w-3/4 mt-2 text-yellow-500">E-mail:</Text>
			<TextInput
				accessibilityLabel="enter email input"
				placeholder="Email address"
				className="self-center p-4 border-2 border-yellow-500 w-3/4 text-white"
			/>
			<Text className="self-center w-3/4 mt-2 text-yellow-500">Password:</Text>
			<TextInput
				secureTextEntry={true}
				accessibilityLabel="enter password input"
				placeholder="password"
				className="self-center p-4 border-2 border-yellow-500 w-3/4 text-white caret-yellow-500"
			/>
			<View className="pt-10">
				<Pressable
					onPress={handleLogin}
					accessibilityLabel="Log in button"
					className="bg-yellow-500 rounded-lg w-3/4 py-2 self-center my-5"
				>
					<Text className="text-black self-center font-bold">Login</Text>
				</Pressable>
				<Pressable
					onPress={handleRegisterPress}
					accessibilityLabel="Register button"
					className="border-4 rounded-lg border-yellow-500 w-3/4 py-2 self-center my-5"
				>
					<Text className="text-yellow-500 self-center font-bold">
						Register
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default HomeScreen;
