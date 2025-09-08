import nmp from 'minecraft-protocol';
import mineflayer from 'mineflayer';
import viewer from 'prismarine-viewer';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const client = nmp.createClient({
    realms: {
        pickRealm: (realms) => realms[1]
      },
    username: process.env.EMAIL, // minecraft username
    version: process.env.VERSION,
    auth: 'microsoft'
});

client.on('playerChat', ev => {
    console.log(ev);
});

client.once('spawn', () => {
    viewer(client, { port: 1234, firstPerson: true });
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

app.post('/move', (req, res) => {

    active = true;
    return res.status(200).json({success: true, message: 'Moving bot...'});

});

app.post('/stop', (req, res) => {

    active = false;
    stop();
    return res.status(200).json({success: true, message: 'Ceasing bot motion...'});

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