# CS396_Final_Project
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
