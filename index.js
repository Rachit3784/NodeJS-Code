const express = require("express");
const db = require("./Database/connection.js")
const Routee = require("./routes/employee.js")
const bodyParser = require("body-parser");
require("dotenv").config();


const Port = process.env.PORT || 9000


server = express();

server.use(bodyParser.json());


server.listen(Port,()=>{
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



//Adding to github 


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

E:\NodeJSGlobal\NodeJs-Git>git add index.js
warning: in the working copy of 'index.js', LF will be replaced by CRLF the next time Git touches it

E:\NodeJSGlobal\NodeJs-Git>git commit -m "second version"
[master 7fc427d] second version
 1 file changed, 97 insertions(+)

E:\NodeJSGlobal\NodeJs-Git>git remote add origin https://github.com/Rachit3784/NodeJS-Code.git

E:\NodeJSGlobal\NodeJs-Git>git remote -v
origin  https://github.com/Rachit3784/NodeJS-Code.git (fetch)
origin  https://github.com/Rachit3784/NodeJS-Code.git (push)

E:\NodeJSGlobal\NodeJs-Git>git branch -M main

E:\NodeJSGlobal\NodeJs-Git>git push -u origin main
To https://github.com/Rachit3784/NodeJS-Code.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/Rachit3784/NodeJS-Code.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

E:\NodeJSGlobal\NodeJs-Git>git pull --rebase origin main
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (3/3), 885 bytes | 110.00 KiB/s, done.
From https://github.com/Rachit3784/NodeJS-Code
 * branch            main       -> FETCH_HEAD
 * [new branch]      main       -> origin/main
Successfully rebased and updated refs/heads/main.

E:\NodeJSGlobal\NodeJs-Git>git push origin main
Enumerating objects: 18, done.
Counting objects: 100% (18/18), done.
Delta compression using up to 4 threads
Compressing objects: 100% (13/13), done.
Writing objects: 100% (17/17), 15.79 KiB | 1.97 MiB/s, done.
Total 17 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), done.
To https://github.com/Rachit3784/NodeJS-Code.git
   6a0c633..905410b  main -> main

E:\NodeJSGlobal\NodeJs-Git>



//-----------------------------------------------------------------------------------
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# Add the remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/your-username/my-project.git

# Verify the remote (optional)
git remote -v

# Push the code to GitHub
git branch -M main  # Rename branch to 'main' if needed
git push -u origin main


git pull --rebase origin main
This pulls the latest changes from GitHub and rebases them with your local commits.
If there are merge conflicts, resolve them before proceeding.




git add .
git commit -m "Updated feature XYZ"
git push origin main



To push the current branch and set the remote as upstream, use

    git push --set-upstream origin main


*/