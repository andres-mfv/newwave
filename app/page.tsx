import Image from "next/image";

const socket = new WebSocket("ws://localhost:8080/ws")

// Connection opened
socket.addEventListener("open", event => {
  socket.send("Connection established")
});

// Listen for messages
socket.addEventListener("message", event => {
  console.log("Message from server ", event.data)
});

socket.addEventListener("close", event => {
  console.log("Disconnect");
})

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
