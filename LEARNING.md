<h2> Design Choice </h2>
Choose Model View Controller (MVC) framework as it is the best practice. <br/>
<img src="images/MVC.png" width="50%" height="50%"> <br/>
<b> Example </b> <br/>

<b> View </b> 
The View component is used for all the UI of the application. The UI components such as text boxes, dropdowns, etc. Is the webpage that users interacts with.

<b> Model </b> 
The Model represent either the data that is being transferred between the View and Controller components or any other business logic-related data. Retrieve, insert, update and delete information from/to the database. 

<b> Controller </b> 
Controllers act as an interface between Model and View components to process all the logic and incoming requests, manipulate data using the Model component and interact with the Views to render the final output. Controller will take in the incoming requests from the users and update the database (Model). 
