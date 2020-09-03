# EventHub Development Process
A full-stack Node.js project with RESTful routing : EventHub

![home-page](eventhub.bmp)

## Initial Setup
* Add Landing Page
* Add Events Page that lists all Events

Each Event has:
   * Name
   * Image

## Layout and Basic Styling
* Create header and footer partials
* Add in Bootstrap

## Creating New Events
* Setup new Event POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

## Style the Events page
* Add a better header/title
* Make Events display in a grid

## Style the Navbar and Form
* Add a navbar to all templates
* Style the new Event form

## Add Mongoose
* Install and configure Mongoose
* Setup Event model
* Use Event model inside of routes

## Show Page
* Review the RESTful routes we've seen so far
* Add description to the Event model
* Show db.collection.drop()
* Add a show route/template

## Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly!

## Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

## Add the Comment model!
* Make comment errors go away!
* Display comments on Event show page

## Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

## Style Show Page
* Add sidebar to show page
* Display comments nicely

## Finish Styling Show Page
* Add public directory
* Add custom stylesheet

## Authentication Pt. 1 - Add User Model
* Install all packages needed for auth
* Define User model 

## Authentication Pt. 2 - Register
* Configure Passport
* Add register routes
* Add register template

## Authentication Pt. 3 - Login
* Add login routes
* Add login template

## Authentication Pt. 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar

## Authentication Pt. 5 - Show/Hide Links
* Show/hide auth links in navbar 

## Refactor The Routes
* Use Express router to reoragnize all routes

## Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

## Users + Events
* Prevent an unauthenticated user from creating a Event
* Save username+id to newly created Event

## Editing Events
* Add Method-Override
* Add Edit Route for Events
* Add Link to Edit Page
* Add Update Route

## Deleting Events
* Add Destroy Route
* Add Delete button

## Authorization Part 1: Events
* User can only edit his/her Events
* User can only delete his/her Events
* Hide/Show edit and delete buttons

## Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

Event Edit Route: /Events/:id/edit
Comment Edit Route:    /Events/:id/comments/:comment_id/edit

## Deleting Comments
* Add Destroy route
* Add Delete button

Event Destroy Route: /Events/:id
Comment Destroy Route:    /Events/:id/comments/:comment_id

## Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware to a single file

## Adding in Flash!
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header

## Adding dynamic price tag
* Show user-defined price
* Edit new or old price
* Change model for Event
