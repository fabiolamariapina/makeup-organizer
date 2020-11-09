# makeup-organizer

Technologies Used:
For this project, I used all the technologies required to make a full-stack app using the mvc model: express, express-session, MongoDB, method-override, and ejs. As part of this project, we are supposed to host this on heroku. However, this has been the most difficult part of this project and one of my unsolved problems. I will elaborate on my issues with heroku later on in this file.

Approach Taken:
The first part of this project was to create the routes and pages and get them to work. The main challenge in doing this part of the project was working with the drop down bar when the user enters what type of makeup it is. Before, the data was not even being entered. It turns out that the error was in the name. I had a different name for type instead of "type". Anothr challenge I encountered was learning how to have user authentication and passwords. At first, the user could not stay logged in. It turned out that I had to change the action when creating the sign up and log in forms. I then styled my pages. For the most part, it was pretty siple, given the consistencly in position and coloring. One thing I really love about my styling is the coloring. My goal is to make my app come across as soft and pretty and I think the colors really helped with that. However, I want to keep styling in order to have optimal positioning and alignment. Finally, I deployed my app on heroku. At first, it gave me an interanl server error, which I fixed by adding SECRET=FEEDMESEYMOUR as a key-value pair. So far, it has only worked for the home page of my app. My biggest challenge yet has been trying to figure out why it works for the home page but not for the log in or sign up pages.

Notes for later:

- Improve styling
  _ positoning
  _ spaces between buttons
  _ size of buttons
  _ figure out how to space between buttons  
  \_ figure out my issues with heroku that does not have to do with my homepage

Link to (somewhat) working app:
https://makeup-organizer.herokuapp.com/home

Things I have fixed and improved upon:

- Date: November 8, 2020
  - Instead of having two buttons for logging in and signing up on the home page, the only button is now the log-in. To sign up, you click on the link below the button. This is what most websites and apps style their pages.
  - Improved spcing between button and link.
  - When hovering over a link, the link will change to the same color as the makeup organizer heading.
