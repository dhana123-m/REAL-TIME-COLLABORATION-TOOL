const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// ✅ Serve static files from the correct path
app.use(express.static(path.join(__dirname, '..', 'clients')));

// ✅ Fallback route for root "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'clients', 'index.html'));
});

wss.on('connection', socket => {
  console.log('WebSocket client connected');

  socket.on('message', msg => {
    wss.clients.forEach(client => {
      if (client !== socket && client.readyState === WebSocket.OPEN) {
        client.send(msg);
      }
    });
  });

  socket.on('close', () => {
    console.log('WebSocket client disconnected');
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
