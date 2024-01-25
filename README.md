===================== Task Management ==========================

File Structure---------<br>
1). Index.js is the main file where i listen my app using the express.<br>
2). The schema of our task is in the Models folder.<br>
3). Our all API routes is created in the Routes.<br>
4). All controller functions are cretaed in the controller folder.<br>
5). There is a seperate folder of database connection named db.<br>
<br>
Functionalities of this project-----------<br>
1). Create a Task---><br>
For creating a task i have taken he title, description and dueDate from the user from request.body after that i have put a validation of checking that the use has given the title and the description if user did not give any of them the error message thrown else the new card is created in the database.<br>
2). Delete a Task---><br>
To delete a task i have taken the id of the task in the req.params then i put a validation to find the task from the id and if the task is not found the error is thrown else the task will be deleted from the database.<br>
3). Update a Task---><br>
For updating the task i take the title the description from the user and the id of the task which we want to update and also put an validation that both is mandatory if user will not give any of them then the error will be occured else the old card is updated by findind that in the database using the id.<br>
