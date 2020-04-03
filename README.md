This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

The task is to write a simple webpage in React​ that shows a list of books - data is provided via an Ajax Request, that returns a JSON object.

Demo [here](https://vbait.github.io/books-kiosk/)

### Tech stack

- create-react-app
- bootstrap
- react-bootstrap
- react-final-form
- luxon (to work with dates)
- eslint
- prettier
- no redux or similar libraries, just native react state management ([why](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367))

### Requirements

Each book will have:<br />

- Author
- Date
- Title

When you enter the page, an AJAX request should fetch a list of books from a json file.<br />
The page will show all the books resolved from the requests with a proper design – nice design – high score.<br />
The design should be based on bootstrap (http://getbootstrap.com/) or react material design (https://material-ui.com/) include images and should look good​.<br />

- Each book can be editable, meaning that an edit button​ should be available to edit the book fields.
- Edit button should open a modal with save and cancel buttons (The modal should be based on Boostrap/material ui)
- Proper validation should be included for strings – not empty​, and date – should be validated​ with error message.
- There should be an option to delete book with a prompt message.
- Show each book title : in the following format : first letter of each word upper cased and each other letter should be lower cased, also remove any non-English letters from the title. For example : A title with the name “@@THIS is a BooK!!” should be changed to “This Is A Book” (similar as angular filter / pipe​ )
- Should have a button to add new book​.
- Prevent from the user to add / edit a book with existing title, show error message that same book name is already exist

_None of this operations should be persistent (refreshing the page will clear the changes)._

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.
