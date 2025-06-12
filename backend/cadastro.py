import sqlite3

con = sqlite3.connect('banco/cadastro.db')
cur = con.cursor()

cur.close()
con.close()
