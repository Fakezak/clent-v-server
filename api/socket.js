import http from 'http';
import { Server } from 'socket.io';

const server = http.createServer();

const io = new Server(server, {
  cors: { origin: "*" },
  path: '/api/socket/socket.io',
});

io.on('connection', (socket) => {
  socket.on('player_ready', () => {
    socket.emit('system_notification', {
      display_style: 'green_text',
      content: 'Welcome to client v',
      duration: 5000,
      timestamp: Date.now(),
    });
  });
});

// Export the server properly for Vercel
export default server;
