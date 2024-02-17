import Image from "next/image";
import Button from '@mui/material/Button';
import Link from "next/link";

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
    <body>
      <div className="text-center">
        <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      </div>
      <Button variant="contained" href="/get-started" color="primary">
        Sign up with email
      </Button>
    </body>
  );
}
