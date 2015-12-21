# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.network "forwarded_port", guest: 80, host: 8045
  config.vm.network :forwarded_port, id: "ssh", guest: 22, host: 2245

  config.vm.network "private_network", ip: "192.168.33.45"

  #config.vm.provision "shell", inline: <<-SHELL
  #  sudo yum update -y
  #  sudo yum install -y freetype fontconfig
  #  sudo yum groupinstall "Japanese Support" -y
  #  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
  #  echo 'export NODE_PATH=/home/vagrant/.nvm/versions/node/v0.12.4/lib/node_modules' >> .bash_profile
  #  source ~/.bashrc
  #  nvm install v0.12.4
  #  nvm alias default v0.12.4
  #  npm install -g phantomjs
  #  npm install -g casperjs
  #SHELL
end
