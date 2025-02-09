const express = require("express");
const db = require("./Database/connection.js")
const Routee = require("./routes/employee.js")
const bodyParser = require("body-parser");

server = express();

server.use(bodyParser.json());

server.listen("8080",()=>{
    console.log("Server Started!!!");
});

server.use("/employee",Routee);


/*

E:\NodeJSGlobal\NodeJs-Git>git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Database/
        controller/
        index.js
        models/
        node_modules/
        package-lock.json
        package.json
        routes/

nothing added to commit but untracked files present (use "git add" to track)

E:\NodeJSGlobal\NodeJs-Git>git add.
git: 'add.' is not a git command. See 'git --help'.

The most similar command is
        add

E:\NodeJSGlobal\NodeJs-Git>git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        Database/
        controller/
        index.js
        models/
        node_modules/
        package-lock.json
        package.json
        routes/

nothing added to commit but untracked files present (use "git add" to track)

E:\NodeJSGlobal\NodeJs-Git>git add . 
warning: in the working copy of '.gitignore', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Database/connection.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'controller/empMethod.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'index.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'models/employee.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'routes/employee.js', LF will be replaced by CRLF the next time Git touches it

E:\NodeJSGlobal\NodeJs-Git>git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   .gitignore
        new file:   Database/connection.js
        new file:   controller/empMethod.js
        new file:   index.js
        new file:   models/employee.js
        new file:   package-lock.json
        new file:   package.json
        new file:   routes/employee.js


E:\NodeJSGlobal\NodeJs-Git>git commit -m "first git commit for router"
[master (root-commit) 1712807] first git commit for router
 8 files changed, 1546 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 Database/connection.js
 create mode 100644 controller/empMethod.js
 create mode 100644 index.js
 create mode 100644 models/employee.js
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 routes/employee.js

E:\NodeJSGlobal\NodeJs-Git>git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.js

no changes added to commit (use "git add" and/or "git commit -a")

E:\NodeJSGlobal\NodeJs-Git>
*/