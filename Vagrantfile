# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.network "forwarded_port", guest: 80, host: 8033
  config.vm.network :forwarded_port, id: "ssh", guest: 22, host: 2233

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
  end

  config.vm.synced_folder ".", "/vagrant", mount_options: ['dmode=775']
end
