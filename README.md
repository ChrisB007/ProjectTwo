# Project Two

**Description**
---
**BoxOff** is an app that allows its users to predict which movie will rule the weekend box office. The prediction is based on few factors / consideration from users:
1. Lead Actors | Actresses
2. Directors
3. Number of Thearters
4. Release dates
5. Actors standing in the industry
6. Actor's previous roles

Note: Winners are determined by weekend box office grosses

The app is based off an API provided The Movie Database
- TMDB -
[TMDB](https://www.themoviedb.org/)

**User stories** <br>
---
    App user(s)
        - User(s) are able to visit the site and run searches based on movie titles or categories.
        - User(s) can choose one or many movies to predict as box office winner.
        - Upon selection, full movie details are shown to user(s) (Actors, Directors, Budget e.t.c) to help users make educated guesses.
        - In order to participate, user(s) must establish accounts to gain full access

**Technologies used (including APIs)**
---
- This is a Node / Express app that fetches data using [TMDB](https://www.themoviedb.org/) and [Box Office Mojo](https://www.boxofficemojo.com//) API resources.<br>
- Database - ProgreSQL.
- Node.js ORM - Sequelize.

**MVP goals**
---
* Setup app with search functionalities and display results based on relevant searches.
* Ability to create user account and login.
* Ability to save sessions to database via user account(s).

**Stretch goals**
---
- Ability to make insightful predictions based on factors surrounding production, actor's stats, budgets, director's stats, awards, 
- Email notification - To let users know who wins



**Wireframes**
---
![alt text](public/images/index.png)

![alt text](public/images/box.png)

![alt text](public/images/login.png)

![alt text](public/images/dashboatd.png)


**Database ERD**
---
![alt text](public/images/erdme.png)


**RESTful routing chart**
---

![alt text](public/images/routes.png)



<!-- **Daily sprints**
---
**The approach taken**
---
**Unsolved problems**
---
**Sources used**
--- -->