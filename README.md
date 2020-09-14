# Skycocoo.com

Personal website

#### Todo

- integrate with webpack
- implement admin to modify database (POST)
- auto-resize image when uploading to database (into a relatively smaller size to be stored)
- photo sort by date? (parse image info when uploading)
- test different map api for photography display (Google Map, MapFit, WebGLGlobe, 高德地图，MS Bing Map ...)
- fix shortcut icon (strangely not working)

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

local host: ```http://localhost:3000/```


#### mongodb

[backup & restore mongodb container](https://medium.com/faun/how-to-backup-docker-containered-mongo-db-with-mongodump-and-mongorestore-b4eb1c0e7308)

#### docker


stop & delete all containers:

```
$ docker stop $(docker ps -a -q)
$ docker rm $(docker ps -a -q)
```
