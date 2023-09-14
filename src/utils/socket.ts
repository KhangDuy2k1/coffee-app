import { io } from "socket.io-client";
const socket = io.connect("http://192.168.31.11:3000");
export default socket;