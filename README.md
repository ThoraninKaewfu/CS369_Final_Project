# CS396_Final_Project

script code to initial EC2
```
#!/bin/bash

# Update the instance
sudo yum update -y

# Install Git
sudo yum install -y git

# Install Node.js and npm for Amazon Linux 2
sudo yum install -y nodejs npm

cd /home/ec2-user
git clone -b dev https://github.com/ThoraninKaewfu/CS369_Final_Project.git

#install dependencies
cd CS369_Final_Project
sudo npm install
sudo npm install -g nodemon

#install database mysql server
sudo yum install -y https://dev.mysql.com/get/mysql84-community-release-el9-1.noarch.rpm
sudo yum install -y mysql-community-server

#start database server
sudo systemctl start mysqld
sudo systemctl enable mysqld
```

edit inside server
```
# Start the application at app.js
sudo npm run dev

#enter to mysql server
get root pass -> sudo grep 'temporary password' /var/log/mysqld.log
mysql -u root -p


#create database
create database cs369_proj;

#create new user -> admin
CREATE USER 'username'@'host' IDENTIFIED BY 'pass';
GRANT ALL PRIVILEGES ON database.table TO 'username'@'host;
FLUSH PRIVILEGES;
SHOW GRANTS FOR 'username'@'host;

#restore database
mysql -u root -p database < dumpfile
```
