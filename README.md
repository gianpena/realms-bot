# Important Notes

**This project is not yet functional!**

For one reason or another it seems like the code I have right now does not want to cooperate with me. I hope to be able to resolve this soon.

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
Make sure you've created `.env` at the root level of the repository and define the variables `EMAIL` and `VERSION` in this!
