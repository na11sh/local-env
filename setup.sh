#!/bin/bash

sudo apt update -y
sudo apt install -y git
sudo apt install -y --force-yes fontconfig libfontconfig
sudo apt install -y ttf-kochi-gothic

echo 'export NODE_PATH=/home/vagrant/.nvm/versions/node/v0.12.4/lib/node_modules' >> .profile
echo 'export PHANTOMJS_EXECUTABLE=/home/vagrant/.nvm/versions/node/v0.12.4/lib/node_modules/casperjs/node_modules/phantomjs/bin/phantomjs' >> .profile
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash

exec $SHELL --login
