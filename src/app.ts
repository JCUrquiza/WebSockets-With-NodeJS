import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {

    console.log('Client connected');
    
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });

    ws.send('Hi from server');

    setInterval(() => {
        ws.send('Hi again!');
    }, 2000);

});

console.log('Server running on port 3000');


