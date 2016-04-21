echo Host staging
echo "    " User vagrant
echo "    " HostName 127.0.0.1
echo "    " Port $(vagrant port --guest 22)
echo "    " IdentityFile $(pwd)/.vagrant/machines/default/virtualbox/private_key
echo "    " IdentitiesOnly yes
