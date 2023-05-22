import React from "react";
import { View, Text, TextInput } from "react-native";

const RegisterScreen = () => {
	return (
		<View className="bg-black h-screen">
			<Text className="text-lg self-center font-bold text-yellow-500">
				Register
			</Text>
			<Text className="self-center w-3/4 mt-2 text-yellow-500">Name:</Text>
			<TextInput
				accessibilityLabel="enter name input"
				placeholder="Enter your name"
				className="self-center p-4 border-2 border-yellow-500 w-3/4 text-white"
			/>
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

			<Text className="self-center w-3/4 mt-2 text-yellow-500">
				Confirm Password:
			</Text>
			<TextInput
				secureTextEntry={true}
				accessibilityLabel="confirm password input"
				placeholder="Confirm password"
				className="self-center p-4 border-2 border-yellow-500 w-3/4 text-white caret-yellow-500"
			/>
		</View>
	);
};

export default RegisterScreen;
