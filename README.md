# CMPT 370



# Volunteer Management System (VMS)

Welcome to the Volunteer Management System (VMS) repository. This project follows the Model-View-Controller (MVC) architecture to efficiently manage volunteers and their activities. Below are the coding guidelines and instructions for using this system.

## Repository Structure

# backend - all the below files are in backend folder of vms.
- **model**: Contains all data schemas.
- **routes**: Includes all routes.
- **public**: Holds CSS and styling files.
- **middleware**: Configures backend with frontend.
- **config**: Houses configuration files.

# frontend - mainly react code with styling

- **src** - containes react components , features and app folder with App.jsx which serves as the main page.
- **components** - contains react components. make new components to for new screens.
- **app** - apis for interacting the front end with backend.
- **features** - user and shifts apis for interacting with frontend.





## Clone Repository

To clone this repository and start contributing, follow these steps:

1. Open your terminal and navigate to the directory where you want to clone the project.

2. Run the following command to clone the repository:

```bash
git clone https://git.cs.usask.ca/xka368/cmpt-370.git
```

3. Change to the project directory:

```bash
cd vms
```
4. Install all the node modules by following command

```bash
npm install

```

4. Create a new branch for your work:

```bash
git branch  feature/your-new-feature
```

5. View current branch  - if your banch not shown with star than you need to change the branch to your current branch.


```bash
git branch

```
6. To switch to your current branch

```bash

git checkout branch_name

```

5. Start making changes and commit them to your branch.

6. Push the branch to the remote repository:

```bash
git push origin feature/your-new-feature
```


## Branch Management

In order to maintain a structured development process, please create different branches for each user story or feature. Follow these guidelines:

1. Always create a new branch for each feature, user story, or bug fix.
2. Branch names should be descriptive of the task or feature, using kebab-case (e.g., `feature/add-registration`, `bugfix/fix-login`).
3. Before merging a branch into `main`, ensure it is tested and free of conflicts.

Example commands for creating a new branch:

```bash
# Create a new branch
git checkout -b feature/new-feature

# Make changes and commit them
git add .
git commit -m "Add new feature"

# Push the branch to the remote repository
git push origin feature/new-feature
```


Now you're ready to work on your feature or user story in your own branch.

Feel free to update this README with specific information about the VMS system, installation instructions, or any additional guidelines for development. Happy coding!
# VolunteerManagementSystem
# Cmpt370-VolunteerManagementSystem
