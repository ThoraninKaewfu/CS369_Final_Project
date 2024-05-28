# CS369_Final_Project
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

edit database server
```
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

back to project dir and change ENV file
```
#back to home
cd
#go to git folder
sudo vim CS369_Final_Project/.env
```

inside ENV file
```
MYSQL_HOST = 'host'
MYSQL_PORT = 'port'
MYSQL_USER = 'username'
MYSQL_PASS = 'userpass'
MYSQL_DB = 'db name'

DATAhttp = 'http://localhost:3000'

```

Config NGINX
```
#goto nginx config dir
cd /etc/nginx/conf.d

#create config file
sudo vim cs369_proj.conf
```
inside cs369_proj.conf
```
server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  _;  # using public IP to access web app
        root         /home/ec2-user/CS369_Final_Project; # Where our proj is.

        location / { #reverse proxy for access node server inside web server
                proxy_pass http://localhost:3000; # my app's port
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
    }
```

start node server and nginx
```
# Start the application at app.js
sudo npm run dev

#restart nginx
sudo systemctl restart nginx
```

BY

เปรมรัศมี ไหล่วิจิตร<br>
REF : https://devsarticles.com/deploy-nodejs-app-to-aws-ec2-hosting
