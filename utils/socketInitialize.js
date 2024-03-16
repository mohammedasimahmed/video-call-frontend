import { io } from "socket.io-client";
export default function socketInitialize() {
  const socket = io(
    process.env.BACKEND_URL ? process.env.BACKEND_URL : "http://localhost:5000"
  );
  return socket;
}
