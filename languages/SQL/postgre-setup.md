### PostGre setup

#### setup
- [manuals] (http://www.postgresql.org/docs/)
- [the best one] (https://help.ubuntu.com/community/PostgreSQL)

#### Basic Server Setup

To start off, we need to change the PostgreSQL postgres user password; we will not be able to access the server otherwise. As the “postgres” Linux user, we will execute the psql command.

In a terminal, type:

`sudo -u postgres psql postgres`

Set a password for the "postgres" database role using the command:

`\password postgres`

and give your password when prompted. The password text will be hidden from the console for security purposes.

Type Control+D to exit the posgreSQL prompt. 


#### misc
using User for a class with JPA need specific config coz user is a reserved words for postgreSQL
- [postgres-table-column-name-restrictions] (http://stackoverflow.com/questions/10891368/postgres-table-column-name-restrictions)
- [unable-to-use-table-named-user-in-postgresql-hibernate] (http://stackoverflow.com/questions/4350874/unable-to-use-table-named-user-in-postgresql-hibernate)



