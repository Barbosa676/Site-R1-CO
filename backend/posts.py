import sqlite3

con = sqlite3.connect('banco/posts.db')
cur = con.cursor()

cur.close()
con.close()
