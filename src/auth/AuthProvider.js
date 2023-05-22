import React, { createContext, useContext, useEffect, useState } from "react";
import { login, logOut } from "../api/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const AuthContext = createContext();
const LoginContext = createContext();
const LogoutContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function useLogin() {
	return useContext(LoginContext);
}

export function useLogout() {
	return useContext(LogoutContext);
}

export const AuthProvider = ({ children }) => {
	const [authData, setAuthData] = useState(null);

	const handleLogin = async (email, password) => {
		try {
			console.log("logging in");
			const result = await login("rkrussel@gmail.com", "vitalogy");
			const data = await result;
			console.log(data);

			setAuthData(data.data.token);
			await AsyncStorage.setItem("token", data.data.token);
			return result;
		} catch (err) {
			setAuthData(null);
			console.log("login error", err);
		}
	};

	const handleLogout = async () => {
		const config = {
			headers: { Authorization: `Bearer ${authData}` },
		};
		try {
			console.log("logging out");
			const result = await logOut("rkrussel@gmail.com", config);
			setAuthData(null);
			await AsyncStorage.removeItem("token");
			return result;
		} catch (err) {
			console.log("logout error", err);
		}
	};

	const getAuth = async () => {
		try {
			const auth = await AsyncStorage.getItem("token");
			return auth;
		} catch (err) {
			return null;
		}
	};

	useEffect(() => {
		getAuth().then((res) => {
			if (res) {
				setAuthData(res);
			}
		});
	}, []);
	console.log("auth DAta", authData);

	return (
		<AuthContext.Provider value={authData}>
			<LoginContext.Provider value={handleLogin}>
				<LogoutContext.Provider value={handleLogout}>
					{children}
				</LogoutContext.Provider>
			</LoginContext.Provider>
		</AuthContext.Provider>
	);
};
