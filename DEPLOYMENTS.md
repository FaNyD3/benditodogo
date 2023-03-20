# Deployments steps

shell
# build image
> docker build . -t benditodogo/benditodogodotcom
# create container with recently created image
> docker run --name benditodogodotcom -d -p 80:3000 benditodogo/benditodogodotcom


Most probably there is already a `benditodogodotcom` container running, stop it with `docker stop benditodogodotcom && docker rm benditodogodotcom`. Then just create the container again.

After all steps, we should have the new version in `benditodogolabs.com` and `143.198.131.61`