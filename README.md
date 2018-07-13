MELISSA MALALA WEEK 3 MORINGA SCHOOL INDEPENDENT PROJECT
Ping Pong Game

This is my third project at Moringa School Prep, and the aim is to create a PingPong game that will allow the user to input a number whose result will be determined by its divisibility by either 3 or 5.

Contents:
--------------

In this project, JavaScript is used to create a loop that determines whether numbers are divisible by 3, 5 or 3 & 5 (both). Values that are entered and are not numbers are supposed to be deemed invalid. Once the user inputs their number, the result will return "ping", "pong" or pingpong.
I created an else if statement for pingpong, instead of appending the pong to the ping in case it's divisible by both.

SPECIFICATIONS OF THE PROJECT:
Backend Logic
-----------------
Firstly, I created a function called 'create_ping' and assign to it num. numList which is an empty array that is supposed to contain the return of the function, e.g when a user puts in a value, the value should result in either ping, pong or pingpong.

I then created a 'for' loop that increases the value of i, until it reaches the end of the user input num (defined in the front end). 'I' stops at each alteration and run three questions (booleans - true or false statements):

According to the instructions provided, the function should run as follows:

1. If divided by 3, is there any balance? If yes, push Ping to numList.
2. If divided by 5, is there any balance? If yes, push Pong to numList.
3. If divided by 3 and 5, is there any balance? If yes, push Pingpong to numList.

The closing else statement declares that all numbers that do not fit the above requirements are to be returned as they are.


User Logic
----------------

Create a function that will ONLY run once all other elements of the website are loaded. Identify the form with the id "WillitPong" followed by a submit tag. "Event prevent default" will prevent the code from refreshing every time a user has filled in a value. Another important step is to ensure that the form is cleared EVERYTIME a button is pressed. This will be achieved using the .empty method.

We then declare num. Num is given by the input method in our index.html file. Using 'parseInt', the data is translated into integers.

The next step is to call the backend jS by declaring numList to be the function that was created above. After this is done, the aim is to 'append' the data from numList into an 'ordered list'. In some cases,  append function works better than htmt or text.

Finally, a text change is made when the function begins.

CSS
------------
This project was styled using Bootstrap for a polished finish. Oswald font was used (Google Fonts) for a more elegant finish.

LICENSE:

MELISSA MALALA
