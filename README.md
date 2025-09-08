Exactly as the repository description suggests. This bot is intended to AFK on a realm so that farms can be AFKed. In order to prevent being AFK kicked, you can POST `http://localhost:3456/move` so that it moves forward and backward.

As of the most recent commit, there is no way to stop it from moving; I will likely create an endpoint for this soon in commits to follow.

# Installing dependencies
```sh
npm install
```

# Starting the bot
```sh
npm start
```

# Why isn't it working?!
Make sure you've created `.env` at the root level of the repository and define the variables `EMAIL` and `VERSION` in this!
