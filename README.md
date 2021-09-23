# M4 Takehome

## [View this deployed app in action](https://newsblurbs.vercel.app/)

### Table of Contents
- [Overview](#overview)
- [Features](#features)
- [In use](#in-use)
- [Set up](#set-up)
- [Technologies](#technologies)
- [Contributors](#contributors)

## Overview

This project was created for the Mod 4 Take Home Challenge. We were given a minimum set of requirements to incorporate into an MVP for this application. The requirements are as follows:
```
- A list of articles
- A “detailed” view for each article (as opposed to summary/list view)
- Articles in the list must link to the detailed article view you create
- Some sort of search, filter, OR sort
```

## Features

- UI that accesses data from [NYT Top Articles API](https://developer.nytimes.com/docs/top-stories-product/1/overview) to provide a condensed news-reading experience for the User
- On visiting, the site displays the current date and the top articles from across all categories
- A User can click on an individual article's "Read more" button and get a detailed view of that article, along with a link to the full one
- Users can choose a news category of their choice and have the application load relevant articles
- Users can search the current category for articles that contain the User's query
- Error handling for invalid URLs, too many requests, and server errors
- Responsive design for use across desktop, tablet, and mobile devices
- WAVE and Lighthouse audit compliant
- Cypress testing to cover basic user flows

## In use

![Detailed Article Demo](https://media.giphy.com/media/tZ3aUFEbGdzkBuiwGO/giphy.gif?cid=790b7611d4e98cf948bc62b92afa32e5c1f9c58c59c3ebf7&rid=giphy.gif&ct=g)<br />
![Category Selector](https://media.giphy.com/media/sEHygGbwy85Fxn5HSD/giphy.gif?cid=790b7611693948697ba5533c1d616a2f83823ea92ffb89e2&rid=giphy.gif&ct=g)<br />
![Search Demo](https://media.giphy.com/media/xjb6ERjSKSVq93WQht/giphy.gif?cid=790b7611b58f465ee56acecfb2250b51e74b93b43bcf4a0b&rid=giphy.gif&ct=g)


## Set Up

Clone this repo down, and `cd` into it.

Run `npm install`

Run `npm start`

For testing, run `npm run cypress`

## Technologies
<p align="left">
  <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="javascript" />
  <img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" alt="html5"/>
  <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Github" />
</p>
<p align="left">
  <img src="https://img.shields.io/badge/-React-cyan" alt="React" />
  <img src="https://img.shields.io/badge/-React%20Router-CA4245?logo=react-router" alt="React Router" />
  <img src="https://img.shields.io/badge/-Cypress-gray" alt="Cypress" />
  <img src="https://img.shields.io/badge/-dayJS-yellowgreen" alt="dayJS" />
</p>

## Contributors
<table>
     <tr>
        <td> Bobby Vasquez <a href="https://github.com/hoomberto">GH</td>
    </tr>
    </tr>
    <td><img src="https://avatars.githubusercontent.com/u/78388491?v=4" alt="Bobby GH img"
 width="150" height="auto" /></td>
</table>



