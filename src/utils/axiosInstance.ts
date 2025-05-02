import axios from "axios";

const instance = axios.create();
instance.defaults.timeout = 500;

export default instance;
