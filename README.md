# vagrant-staging

A bare [Vagrant](https://www.vagrantup.com/) box + shell script for testing deployment/provisioning scenarios through SSH.

Vagrant lets you connect to a running box simply with `vagrant ssh`, but if you want to SSH into the box by other means, you need to use Vagrant's key file.
Example scenario: Testing an [Ansible](https://www.ansible.com/) deployment with your Vagrant box without using the [ansible_local  provisioner](https://www.vagrantup.com/docs/provisioning/ansible_local.html).

## Bring the box up

```sh
vagrant up
```

## Create the SSH config entry

```sh
./ssh-config.sh >> ~/.ssh/config
```

This creates a host entry that looks like:

```
Host staging
     User vagrant
     HostName localhost
     Port 2222
     IdentityFile /Users/atesgoral/Sandbox/vagrant-staging/.vagrant/machines/default/virtualbox/private_key
     IdentitiesOnly yes
```

All the shell script does is to determine the host port number that is mapped to the SSH port (22) on the guest, and to determine the absolute path to the private key.

Edit the hostname if you like.

## Connect to the box

```sh
ssh staging
```
