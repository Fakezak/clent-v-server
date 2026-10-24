import http from 'http';
import { Server } from 'socket.io';

const server = http.createServer();
const io = new Server(server, {
  path: '/api/socket/socket.io',
  cors: { origin: "*" }
});

io.on('connection', (socket) => {
  socket.on('player_ready', () => {
    socket.emit('system_notification', {
      display_style: 'green_text',
      content: 'Welcome to client v',
      duration: 5000
    });
  });
});

export default server;
