## NPM
> npm install

## RUN
> npm run start

## BUILD
> npm run build

## Docker

shell
# build image
> docker build . -t benditodogo/benditodogodotcom
# create container with recently created image
> docker run --name benditodogodotcom -d -p 80:3000 benditodogo/benditodogodotcom