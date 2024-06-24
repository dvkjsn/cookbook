# Note: the module name is psycopg, not psycopg3
import psycopg2

hostname = 'localhost'
database = 'total'
username = 'postgres'
pwd = '2005'
port_id = 5432
conn = None
cur = None
try:
	conn = psycopg2.connect( host = hostname, dbname = database, user = username, password = pwd, port = port_id)

	#	print("Are we here?")
	cur = conn.cursor()
	create_script = ''' CREATE TABLE IF NOT EXISTS employee (
				id int PRIMARY KEY,
				name varchar(40) NOT NULL,
				salary int,
				dept_id varchar(30)) '''
	cur.execute(create_script)
	conn.commit()

except Exception as error:
	print (error)

finally:
	if cur is not None: 
		cur.close()
	if conn is not None:
		conn.close()

