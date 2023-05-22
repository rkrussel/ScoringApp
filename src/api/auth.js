import axios from "axios";
import { API_URL_PREFIX } from "@env";

export const login = async (email, password) => {
	const result = await axios.post(`${API_URL_PREFIX}/login`, {
		email,
		password,
	});
	return result;
};

export const logOut = async (email, password) => {
	const result = await axios.post(`${API_URL_PREFIX}/logout`, {
		email,
		password,
	});

	return result;
};
