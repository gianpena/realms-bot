import mineflayer from 'mineflayer';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

let client = mineflayer.createBot({
    host: process.env.HOST,
    username: process.env.EMAIL,
    version: process.env.VERSION,
    auth: 'microsoft'
});

client.on('chat', (username, message) => {
    if (username === client.username) return;
    console.log(`${username}: ${message}`);
});

client.once('spawn', () => {
    console.log('Bot spawned, starting viewer...');
});

const app = express();
const port = 3456;

app.use(cors());

app.use(express.json());

function forward() {
    client.setControlState('back', false);
    client.setControlState('forward', true);
}
function backward() {
    client.setControlState('forward', false);
    client.setControlState('back', true);
}

function stop() {
    client.setControlState('forward', false);
    client.setControlState('back', false);
    client.setControlState('left', false);
    client.setControlState('right', false);
}
async function timeout(delay){
    await new Promise(resolve => setTimeout(() => {
        resolve();
    }, delay * 1000));
}

function rejoin() {
    client = mineflayer.createBot({
        host: process.env.HOST,
        username: process.env.EMAIL,
        version: process.env.VERSION,
        auth: 'microsoft'
    });
}

app.post('/move', (req, res) => {

    active = true;
    return res.status(200).json({success: true, message: 'Moving bot...'});

});

app.post('/stop', (req, res) => {

    active = false;
    stop();
    return res.status(200).json({success: true, message: 'Ceasing bot motion...'});

});

app.post('/disconnect', (req, res) => {
    active = false;
    stop();
    client.quit('logged off with /disconnect');
    return res.status(200).json({success: true, message: 'Logging off...'});
});

app.post('/connect', (req, res) => {
    rejoin();
    return res.status(200).json({success: true, message: 'Connecting...'});
});

app.listen(port, () => {
    console.log(`Express listening on port ${port}...`);
});

let active = false;
setTimeout(async () => {
    for(let i=0;;i++) {
        if(active) {
            if(i%2===0) forward();
            else backward();
        }
        await timeout(1);
    }
}, 1000);