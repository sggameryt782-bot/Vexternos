const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { exec } = require('child_process');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(bodyParser.json());

let minecraftProcess;

// API endpoints
app.post('/start', (req, res) => {
    minecraftProcess = exec(`java -Xmx1024M -Xms1024M -jar ${config.minecraftJar} nogui`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
    res.send({ status: 'Server is starting' });
});

app.post('/stop', (req, res) => {
    if (minecraftProcess) {
        minecraftProcess.kill();
        res.send({ status: 'Server is stopping' });
    } else {
        res.status(400).send({ status: 'Server is not running' });
    }
});

app.post('/restart', (req, res) => {
    if (minecraftProcess) {
        minecraftProcess.kill();
    }
    minecraftProcess = exec(`java -Xmx1024M -Xms1024M -jar ${config.minecraftJar} nogui`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
    res.send({ status: 'Server is restarting' });
});

app.get('/status', (req, res) => {
    // Return server status logic here
    res.send({ status: minecraftProcess ? 'Running' : 'Stopped' });
});

io.on('connection', (socket) => {
    console.log('New client connected');
    // You can implement console log stream here
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
