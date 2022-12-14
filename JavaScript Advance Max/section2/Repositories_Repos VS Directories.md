
# Repositories 
 * usually called 'repos'. store the full history and version control of a project . 
 * the can either be hosted locally or on a shared server , such as Github . 
 * most "repos" are stored on GitHub . while core contributors  make copies of the repository on their machine and update the repository using the push.pull system 
 * any "repos" stored somewhere other than locally is called a "remote repository"
------------------------------------------------------
 # Repos VS Directories 
   * repository are timelines of the entire project , including all previous changes 
   * Directories , or "Working Directories" are projects at their current state in tine . 
   * any local directory interacting with a  repository is technically a repository itself , however, it is better to call these directories "local repositories", as they are instances of a remote repository . 
   ![Screenshot 2022-12-13 185151](https://user-images.githubusercontent.com/92353024/207384106-b8ef0d15-1b5b-4ebb-8b2b-6a853351eea1.jpg)

------------------------------------------------------
# Workflow Diagram
![128hsgntnsu9bww0y8sz](https://user-images.githubusercontent.com/92353024/207384159-35fd133a-296d-4943-b58a-c32f1071c16d.jpeg)
-----------------------------------------------------
# Branch Introduction 
* git branches are a way to create separate development paths without overriding or creating copies of your project .
* Branches can be added, deleted , and merged , just like regular commits . 
# use of Branches common
## Branches can be used to : 
  - create separate development path without overriding progress
  - separate different end goals of you project 
  - Creates separate branches for each stage of development(release, development, fixes, master)
  - img here 

## Branches instruction 
  * git branch ==> uses to show all branch 
  * git branch nameOfNewBranch ==> use to create new branch 
  * git checkout nameOfNewBranch ==> use to change current branch to another 
  * git branch -d nameOfNewBranch => to delete branch 