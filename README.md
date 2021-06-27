Go to backend and frontend folder and run the npm install command to load all the packages of the project.
In backend folder run the command node server.js to on the backend server.
In frontend folder run the command npm start to on the frontend server.
Description: As server started, user will redirect to the default page i.e home page. In this page, I created a button and user table and to fetch the data from backend I sent the
axios request and this api will return the list of users in 8sec. If the user clicks the Button before the data has arrived from the api, then the ongoing request will  get cancelled
otherwise user will get navigate to next page. In this page I created a button and piechart of the data and again I call the api to fetch the data from backend and here also I provide 
the same delay to return the response.If the user clicks the Button before the data has arrived from the api, then the ongoing request will be get cancelled.
In Backend, I created the static data. In this project, I use the d3.js library to create the piechart.



