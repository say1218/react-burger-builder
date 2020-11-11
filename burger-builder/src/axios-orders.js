import axios from "axios";

const instance = axios.create({
	baseURL: "https://burger-builder-baf7c.firebaseio.com/",
});
export default instance;
