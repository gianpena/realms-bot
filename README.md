Exactly as the repository description suggests. This bot is intended to AFK on a realm so that farms can be AFKed. In order to prevent being AFK kicked, you can POST `http://localhost:3456/move` so that it moves forward and backward.

As of the most recent commit, there is no way to stop it from moving; I will likely create an endpoint for this in the next commit.

# Installing dependencies
```sh
npm install
```

# Starting the bot
```sh
npm start
```
