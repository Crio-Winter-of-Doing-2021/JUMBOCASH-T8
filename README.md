<p align="center"> <img align="center" alt="jumbotail" src="https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8/blob/frontend/assets/img/JumbotailLogo.png" height='100' width='400'></p>

<br /><br />

## Jumbotail - Cash Flow Management App

Cash Flow Management App is an application that enables small business owners to track all their credit and debit transactions in one place. The application have the provision to enter individual transactions for each entity (vendor, customer etc.). It is capable of pulling up historical transactions related to a particular entity or show the overall cash flow summary.

## Features

- Users (small business owners) log into the App on the Web UI. They will be authenticated at this step.

- Users can add entities which could be customers/vendors.

- Users can post transactions on the UI as and when they happen. Each transaction have the entity with which the transaction occurred.

- Users can see a dashboard of all transactions with an overall cash flow summary.

- Users can filter on a specific entity to see all of their transactions with that entity.

## Technology Stack to be used:

<img src="https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/><img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"/> <img src="https://img.shields.io/badge/postgres-0B96B2?style=for-the-badge&logo=postgresql&logoColor=white"/> <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>


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


### Backend Setup Instructions

- Fork and Clone the repo using
```
$ git clone https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8.git
```
- Change Branch to `backend` using 
```
$ git checkout backend
```
- Setup Virtual environment
```
$ python3 -m venv jumbovenv
```
- Activate the virtual environment
```
$ source jumbovenv/bin/activate
```
- Install dependencies using
```
$ pip3 install -r requirements.txt
```
- Make migrations using
```
$ python3 manage.py makemigrations
```
- Migrate Database
```
$ python3 manage.py migrate
```
- Create a superuser
```
$ python3 manage.py createsuperuser
```
- Run server using
```
$ python3 manage.py runserver
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


## Contributors ✨

<table>
  <tbody><tr>
    <td align="center"><a href="https://github.com/rudrakshi99"><img alt="" src="https://avatars.githubusercontent.com/rudrakshi99" width="100px;"><br><sub><b>Rudrakshi</b></sub></a><br><a href="https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8/commits?author=rudrakshi99" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/sukanta-nandi"><img alt="" src="https://avatars.githubusercontent.com/sukanta-nandi" width="100px;"><br><sub><b>Sukanta Nandi</b></sub></a><br><a href="https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8/commits?author=sukanta-nandi" title="Code">💻</a></td>
  </tr>
</tbody></table>

[![Uses Git](https://forthebadge.com/images/badges/uses-git.svg)](https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8) [![Uses HTML](https://forthebadge.com/images/badges/uses-html.svg)](https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8) [![Uses CSS](https://forthebadge.com/images/badges/uses-css.svg)](https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8) [![Uses JS](https://forthebadge.com/images/badges/uses-js.svg)](https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8)
[![forthebadge](https://forthebadge.com/images/badges/made-with-python.svg)](https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8)
[![Built with love](https://forthebadge.com/images/badges/built-with-love.svg)](https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8) [![Built By Developers](https://forthebadge.com/images/badges/built-by-developers.svg)](https://github.com/Crio-Winter-of-Doing-2021/JUMBOCASH-T8) 
