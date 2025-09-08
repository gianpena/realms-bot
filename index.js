import mineflayer from 'mineflayer';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const client = mineflayer.createBot({
    realms: {
        pickRealm: (realms) => realms[1]
      },
    username: process.env.EMAIL, // minecraft username
    version: process.env.VERSION,
    auth: 'microsoft'
});

client.on('chat', async (username, message) => {
    if (username === client.username) return;
    console.log(`${username}: ${message}`);
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
async function timeout(delay){
    await new Promise(resolve => setTimeout(() => {
        resolve();
    }, delay * 1000));
}

app.post('/move', (req, res) => {

    setTimeout(async () => {
        for(let i=0;;i++) {
            if(i%2===0) forward();
            else backward();
            await timeout(1);
        }
    }, 1000);

})

app.listen(port, () => {
    console.log(`Express listening on port ${port}...`);
});