# "Realms bot?" This only connects to standard multiplayer servers, what's the deal?
Well... initially, that's the direction I was taking this in, but it seems like connecting to realms is just busted on mineflayer right now (to my knowledge), so I had to pivot and this is the result. My bad...

# Description

Exactly as the repository description suggests. This bot is intended to AFK on a realm so that farms can be AFKed. In order to prevent being AFK kicked, you can POST `http://localhost:3456/move` so that it moves forward and backward. You can also POST `http://localhost:3456/stop` to cease movement.

# Installing dependencies
```sh
npm install
```

# Starting the bot
```sh
npm start
```

# Why isn't it working?!
Make sure you've created `.env` at the root level of the repository with the following variables:
- `EMAIL` - the email of the account you would like to use for the bot
- `VERSION` - the game version
- `HOST` - the IP or domain name you want the bot to connect to
