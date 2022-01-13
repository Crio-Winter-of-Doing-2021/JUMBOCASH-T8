<p align="center"> <img align="center" alt="jumbotail" src="https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8/blob/frontend/src/assets/img/JumbotailLogo.png" height='100' width='400'></p>
<br /><br />

> Jumbotail is an online marketplace for food and grocery, targeted at kirana stores/ wholesale distributors/ vendors .These businesses buy from the Jumbotail marketplace for their retail sales. 

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technology Stack to be used](#technology-stack-to-be-used)
4. [GitHub Repository Structure](#github-repository-structure)
5. [Getting Started](#getting-started)
	1. [Fork, clone locally and create a branch](#fork-clone-locally--create-a-branch)
	1. [Setting Environment First Time](#setting-environment-first-time)
		1. [Basic Requirements](#basic-requirements)
		1. [Creating Virtual Environment](#creating-virtual-environment)
		1. [Installing Requirements](#installing-requirements)
		1. [Migrating Database](#migrating-database)
		1. [Create Superuser](#create-superuser)
	1. [Starting Development Server](#starting-development-server)
	1. [Leaving the virtual environment](#leaving-the-virtual-environment)
	1. [Update requirements file](#update-requirements-file-critical)
	1. [Update Database](#update-database)  
6. [Team](#team)
7. [Maintainers](#maintainers)

## Introduction

This is the backdoor REST API developed to add and manage historical transactions for [Cash Flow Management](https://jumbocashflow-app-t8.netlify.app/) website. 

Cash Flow Management App is an application that enables small business owners to track all their credit and debit transactions in one place, along with viewing and organizing historical data to look for patterns that can help them improve their business processes. It is capable of monitoring their overall cash flow summary.

## Features

1. Add entity (vendor, customer).
2. Add individual transactions for each entity (vendor, customer).
3. View historical transactions.
4. Filter transactions based on its type, status, mode, entity type and between two dates.
5. Sort transactions according to different fields in ascending or descending order.
6. View overall cashflow summary of current year through graph.
7. View list of entities added.
8. Provide relevant insights based on the frequency of transactional - the total balance in and out, etc.
9. Able to edit existing transactions and entities.
10. Login/Sign Up.
 

## Technology Stack to be used:

<img src="https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white"/> <img src="https://img.shields.io/badge/django%20-%23092E20.svg?&style=for-the-badge&logo=django&logoColor=white"/>  <img src="https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/><img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img src="https://img.shields.io/badge/postgres-0B96B2?style=for-the-badge&logo=postgresql&logoColor=white"/> <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>


- **Frontend**: HTML, CSS, Bootstrap4, Javascript
- **Backend**: Django, Django Rest Framework
- **IDE**: VS Code
- **API Testing & Documentation**: Postman
- **Version Control**: Git and GitHub
- **Database**: PostgreSQL
- **Hosting**: Netlify, Heroku
## Links:

- **Frontend**: [https://jumbocashflow-app-t8.netlify.app/](https://jumbocashflow-app-t8.netlify.app/)
- **Backend**: [https://jumbocashapi.herokuapp.com/jumbocashapi/](https://jumbocashapi.herokuapp.com/jumbocashapi/)

#### GitHub Repository Structure

| S.No. | Branch Name | Purpose |
| --------------- | --------------- | --------------- |
| 1. | [main](https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8/tree/main) | contains the main code  |
| 2. | [backend](https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8/tree/backend) | contains all backend code |
| 3. | [frontend](https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8/tree/frontend) | contains all frontend code |


## Getting Started

### Fork, clone locally & create a branch

Fork [Blog Wall Backend](https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8) repository and clone at your local 

- Fork and Clone the repo using
```
$ git clone https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8.git
```
- Change Branch to `backend` using 
```
$ git checkout backend
```
### Setting Environment First Time

#### Basic Requirements 
1. [Python](https://www.python.org/downloads/)
1. [pip](https://pip.pypa.io/en/stable/installation/)

#### Creating [Virtual Environment](https://docs.python.org/3/library/venv.html) 

A virtual environment is a tool that helps keep dependencies required and the project isolated. If you wish to install a new library and write
```
pip install name_of_library
``` 
on the terminal without activating an environment, all the packages will be installed globally which is not a good practice if you’re working with different projects on your computer.

If this sounds a bit complicated, don’t worry so much because a virtual environment is just a directory that will contain all the necessary files for our project to run.

**Installing venv (required once)**

**Windows**
```
py -m pip install --user virtualenv
py -m venv env
```
**Linux**
```
python3 -m pip install --user virtualenv
python3 -m venv env
```

You have to start virtual environment everytime you start new terminal -

**Windows**

Using gitbash
```
. env/Scripts/activate
```
Using Powershell
```
. env\Scripts\activate
```
**Linux**
```
source env/bin/activate
```

#### Installing Requirements 

**Windows**
```
pip install -r requirements.txt
```
**Linux**
```
pip3 install -r requirements.txt
```

#### Migrating Database
**Windows**
```
py manage.py migrate
```
**Linux**
```
python3 manage.py migrate
```

#### Create Superuser
**Windows**
```
py manage.py createsupeser
```
**Linux**
```
python3 manage.py createsupeser
```

### Starting Development Server
**Windows**
```
py manage.py runserver
```
**Linux**
```
python3 manage.py runserver
``` 

### Leaving the virtual environment
```
deactivate
```

### Update requirements file (Critical)
If you have installed new dependency, the pip freeze command lists the third-party packages and versions installed in the environment. 

**Windows**
```
pip freeze > requirements.txt
```
**Linux**
```
pip3 freeze > requirements.txt
```

### Update Database  
Everytime you change db models, you need to run makemigrations and migrate to update on database.

**Windows**
```
py manage.py makemigrations
py manage.py migrate
```
**Linux**
```
python3 manage.py makemigrations
python3 manage.py migrate
``` 


## Crio Winter of Doing 2021

![crio](https://user-images.githubusercontent.com/55245862/112743082-cdd1e380-8fb1-11eb-9a29-8b26fddad81b.png)

## Team:

> "Alone we can do so little; together we can do so much."

**Team ID: JUMBOCASH-T8** 

| S.No. | Name | Role | GitHub Username:octocat: |
| --------------- | --------------- | --------------- | --------------- |
| 1. | Sukanta Nandi | Backend Development | [@sukanta-nandi](https://github.com/sukanta-nandi) |
| 2. | Rudrakshi | Frontend Development| [@rudrakshi99](https://github.com/rudrakshi99)  |


## Maintainers✨

<table>
  <tbody><tr>
    <td align="center"><a href="https://github.com/rudrakshi99"><img alt="" src="https://avatars.githubusercontent.com/rudrakshi99" width="100px;"><br><sub><b>Rudrakshi</b></sub></a><br><a href="https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8/commits?author=rudrakshi99" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/sukanta-nandi"><img alt="" src="https://avatars.githubusercontent.com/sukanta-nandi" width="100px;"><br><sub><b>Sukanta Nandi</b></sub></a><br><a href="https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8/commits?author=sukanta-nandi" title="Code">💻</a></td>
  </tr>
</tbody></table>

[![Uses Git](https://forthebadge.com/images/badges/uses-git.svg)](https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8) [![Uses HTML](https://forthebadge.com/images/badges/uses-html.svg)](https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8) [![Uses CSS](https://forthebadge.com/images/badges/uses-css.svg)](https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8) [![Uses JS](https://forthebadge.com/images/badges/uses-js.svg)](https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8)
[![forthebadge](https://forthebadge.com/images/badges/made-with-python.svg)](https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8)
[![Built with love](https://forthebadge.com/images/badges/built-with-love.svg)](https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8) [![Built By Developers](https://forthebadge.com/images/badges/built-by-developers.svg)](https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8) 
