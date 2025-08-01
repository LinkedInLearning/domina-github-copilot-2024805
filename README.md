# Domina GitHub Copilot
This is the repository for the LinkedIn Learning course `Domina GitHub Copilot`. The full course is available from [LinkedIn Learning][lil-course-url].

![Domina GitHub Copilot][lil-thumbnail-url] 

_See the readme file in the main branch for updated instructions and information._
## Instructions
This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches
The branches are structured to correspond to the videos in the course. The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter. 
Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `main` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:
	
    Add changes to git using this command: git add .
	Commit changes using this command: git commit -m "some message"

## Installing
1. To use these exercise files, you must have the following installed:
	- Node.js (versión 16 o superior)
	- npm
2. Clone this repository into your local machine using the terminal (Mac), CMD (Windows), or a GUI tool like SourceTree.
3. Install dependencies
   ```bash
   npm install
   ```
## Dev Server
    ```bash
    npm run dev
    ```

    Visit http://localhost:5173 

## Testing
    ```bash
    npm run test
    ```


[0]: # (Replace these placeholder URLs with actual course URLs)

[lil-course-url]: https://www.linkedin.com/learning/domina-github-copilot
[lil-thumbnail-url]: https://media.licdn.com/dms/image/v2/D4E0DAQGUPRMYaLpEIA/learning-public-crop_675_1200/B4EZgr8mbrGYAY-/0/1753083963921?e=2147483647&v=beta&t=glqEHI6NXJmTavOVfSz1g6d3vazdnmri9eAQvRXwpOE

