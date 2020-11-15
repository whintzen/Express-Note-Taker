# :office_worker: Unit 11 Express Homework: Note Taker  :woman_office_worker:

## Concept
Note Taker is an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file

## Business Context
For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## User Story
```
  AS A user, I want to be able to write and save notes

  I WANT to be able to delete notes I've written before

  SO THAT I can organize my thoughts and keep track of tasks I need to complete
```
## Acceptance Criteria
```md
*  Application should allow users to create
   and save notes.

*  Application should allow users to view
   previously saved notes.

*  Application should allow users to delete
   previously saved notes.
```

## Instructions
  * Open a terminal and run these commands to set up the environment files `npm install`, `npm install fs`, `npm install path `, `npm install uuid` and `npm install express` to create the node_modules folder and to add additional information.  
  * Run `node server.js`, this connects you to the PORT 3000.
  * Open a browser and and type `localhost:3000` and this will open the Note Taker Application in the browser.

  ## How the App Works
  * Once the App opens, it will display a `Get Started Button`.  Click on the button and it will bring you to a page where the user can enter and save their Notes. On the right side of the page where it says `Note Title`, click on that text area and start typing your first Note Title. When completed, press the tab key and it will bring you to the text area below `Note Text`.  Type a description of the Note or what the reminder is for.  
  * Please note that a `Save` icon will appear in the upper right of the Navbar.  Click on the `Save` icon, which is a save button and the note will be saved on the Left side of the page along with a `Discard or Empty` button.  
  * If you need to see what the Note contains, click on the Note and it will place the Note and the content back into the right side of the page
  * If you want to delete a note, then click on the Red delete button next to the note.   


## Tools:
 * Node
 * Express
 * Javascript        
 * Package json 
 * CSS
 * HTML
 

## Links:
  * Github Repository:
    [Github](https://github.com/whintzen/Express-Note-Taker)

  * Deployed Application: 
    [Heroku ](https://whintzen.github.io/Employee-Directory)
  
  * Express Note Taker Images
     ![NoteTaker Landing page](https://github.com/whintzen/Express-Note-Taker/blob/master/public/assets/images/Screenshot-Home.png)

     ![NoteTaker Entering Info](https://github.com/whintzen/Express-Note-Taker/blob/master/public/assets/images/Screenshot-EnteringInfo.png)

     ![NoteTaker Saved Note](https://github.com/whintzen/Express-Note-Taker/blob/master/public/assets/images/Screenshot-Saved-Note.png)

     
  
  