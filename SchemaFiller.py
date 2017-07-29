import sqlite3
import from random as rand

conn = sqlite3.connect('ResumeSchema.db')
c = conn.cursor()

def clear():
    c.execute('''
        DROP TABLE IF EXISTS Contact
    ''')

    c.execute('''
        DROP TABLE IF EXISTS Account
    ''')

    c.execute('''
        DROP TABLE IF EXISTS Experience
    ''')

    c.execute('''
        DROP TABLE IF EXISTS Opportunity
    ''')

    c.execute('''
        DROP TABLE IF EXISTS Tag
    ''')

    c.execute('''
        DROP TABLE IF EXISTS Tag_Item
    ''')

    c.execute('''
        DROP TABLE IF EXISTS Experience_Tag
    ''')

    c.execute('''
        DROP TABLE IF EXISTS Opportunity_Tag
    ''')



    c.execute('''
        CREATE TABLE 'Contact' (
        	'Id'	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
        	'Name'	TEXT,
        	'Email'	TEXT,
        );
    ''')

    c.execute('''
        CREATE TABLE 'Account' (
            'Id'	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
        	'Name'	TEXT,
        	'Website'	TEXT,
        );
    ''')

    c.execute('''
        CREATE TABLE 'Experience' (
            'Id'	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
            'Account_Id' INTEGER,
            'Contact_Id' INTEGER,
            'Org'	TEXT,
        	'Role'	TEXT,
            'DateStart' TEXT,
            'DateEnd' TEXT,
            'DateRange' TEXT,
            'Status' TEXT,
            'Type' TEXT
        );
    ''')

    c.execute('''
        CREATE TABLE 'Opportunity' (
            'Id'	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
            'Account_Id' INTEGER,
            'Contact_Id' INTEGER,
            'Role'	TEXT,
            'DateStart' TEXT,
            'DateEnd' TEXT,
            'DateRange' TEXT,
            'Status' TEXT,
            'Type' TEXT
        );
    ''')

    
