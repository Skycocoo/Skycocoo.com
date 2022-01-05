# Skycocoo.com

Personal website

#### Todo

- integrate with webpack
- implement admin to modify database (POST)
- auto-resize image when uploading to database (into a relatively smaller size to be stored)
- photo sort by date? (parse image info when uploading)
- test different map api for photography display (Google Map, MapFit, WebGLGlobe, 高德地图，MS Bing Map ...)
- fix shortcut icon (strangely not working)

## Deployment

Install the required node packages using npm.

```
npm install
```

### [Option 1] Deploy with pm2
```
$ pm2 ls
$ pm2 stop npm
$ pm2 delete npm
$ pm2 start npm -- start
```

### [Option 2] Deploy as a Linux service
Add the following file to `/etc/systemd/system/` and name it as `skycocoo-com.service`. Don't forget to replace `<path_to_your_git_repository_clone` with the directory path of your cloned git repository.

```
[Unit]
Description=skycocoo.com
After=network-online.target

[Service]
Restart=on-failure
WorkingDirectory=<path_to_your_git_repository_clone>
ExecStart=/usr/bin/npm start

[Install]
WantedBy=multi-user.target
```

Then enable the Linux service and start it up. You might need execute the following script with `sudo` permissions.

```
systemctl enable skycocoo-com.service
systemctl start skycocoo-com.service
```

You can check the status of the service with
```
systemctl status skycocoo-com.service
```

## Notes

#### Recommended node and npm versions
- node.js v10.19.0 or above
- npm v6.14.4 or above

#### NPM

```
npm does not support Node.js v10.1.0
```

Work around with [nvm](https://github.com/creationix/nvm/issues/576) (using different versions of node) for a downgraded node

```
export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh
nvm install v8.9.0
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
