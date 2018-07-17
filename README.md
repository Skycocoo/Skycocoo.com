# Skycocoo.com

Personal website


## Todo

database (mongodb)


## Notes

#### NPM

```
npm does not support Node.js v10.1.0
```

Work around with [nvm](https://github.com/creationix/nvm/issues/576) (using different versions of node) for a downgraded node

```
$ nvm install v8.9.0
```

#### express

development: ```$ npm run dev```

start: ```$ npm start```


#### mongodb

[backup & restore mongodb container](https://blog.studiointeract.com/mongodump-and-mongorestore-for-mongodb-in-a-docker-container-8ad0eb747c62)

#### docker


stop & delete all containers:

```
$ docker stop $(docker ps -a -q)
$ docker rm $(docker ps -a -q)
```
