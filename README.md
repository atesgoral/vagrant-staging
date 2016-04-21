# vagrant-staging

A bare [Vagrant](https://www.vagrantup.com/) box + shell script for testing deployment/provisioning scenarios through SSH.

Vagrant lets you connect to a running box simply with `vagrant ssh`, but if you want to SSH into the box by other means, you need to use Vagrant's key file.
Example scenario: Testing an [Ansible](https://www.ansible.com/) deployment with your Vagrant box without using the [ansible_local  provisioner](https://www.vagrantup.com/docs/provisioning/ansible_local.html).

This script generates an SSH config host entry that can be directly appended to your `~/.ssh/config` file and therefore allows you to refer to the Vagrant box with just a host name:

```sh
ssh staging
```

-- as opposed to the cumbersome:

```sh
ssh -p 2222 -i .vagrant/machines/default/virtualbox/private_key vagrant@127.0.0.1
```

-- which may even be impossible to use with tools that don't have enough knobs to tweak for their SSH connection settings.

Similar work: [vagrant-ssh-config-generator](https://github.com/nisaacson/vagrant-ssh-config-generator)

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

All the shell script does is to determine the port number on the host that is mapped to the SSH port (22) on the guest, and to determine the absolute path to the private key.

Edit the host name if you like.

## Use it

Connect to the box via `ssh`:

```sh
ssh staging
```

Use it as a host in your Ansible inventory:

```
[database]
staging
```
