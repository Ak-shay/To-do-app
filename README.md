# To-do app
This is a to-do app written in node-js using mongodb.

## Installation
Make sure you have `npm` and `node` installed in your system.
1. Clone the repository.
```bash
git clone https://github.com/Ak-shay/To-do-app.git
```
2. Install packages.
``` bash
npm install
```
3. Sign up for free https://mlab.com/ to create mongodb database.
4. Create your cluster and database.
5. Connect with your database via driver and add your database link with your database password in `controllers/todo-controller.js` .
```bash
mongoose.connect('<YOUR DATABASE LINK>', {useNewUrlParser: true});
```
6. Run the server.
```bash
node app.js
```

## Usage
Open the to-do list at `localhost:8080/todo` your browser.

Add your task by submiting form.

Delete your task by a single click on task.