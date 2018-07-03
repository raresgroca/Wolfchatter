# Wolfchatter

This chat that will take you anywhere.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

1. Apache and PHP Support
2. PHP 
3. MySQL

### Installing

1. First clone the application into any folder.
2. Create the configuration files for it:
	!!! Important:
	
	In configuraion of the application you have to add to:

	<Directory /home/rares/Work/RRSolutions/Wolfchatter/>
        	Options Indexes FollowSymLinks
        	AllowOverride All
        	Require all granted
	</Directory>

	This is used to allow ovveride of the path that is configured in the .htaccess

3. Createa MySQL database with the name 'wolfchatter'
4. Import the dump that it is attached in git
5. Run and test 

## Built With

* [HTML] - Frontend
* [CSS] - Frontend
* [JavaScript] - Frontend
* [PHP]- The web API
* [MySQL] - Database
