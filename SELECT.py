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

	cur = conn.cursor()
	cur.execute('SELECT * FROM EMPLOYEE')
	for record in cur.fetchall():
		print(record)

except Exception as error:
	print (error)

finally:
	if cur is not None: 
		cur.close()
	if conn is not None:
		conn.close()

