echo Host staging
echo "    " User vagrant
echo "    " HostName localhost
echo "    " Port $(vagrant port --guest 22)
echo "    " IdentityFile $(pwd)/.vagrant/machines/default/virtualbox/private_key
echo "    " IdentitiesOnly yes
