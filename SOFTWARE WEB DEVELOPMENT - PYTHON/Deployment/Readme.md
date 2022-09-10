# Setup
### Objectives
- Get our local Python project ready for deployment
<hr>
Before we create our server we have to do some setup first. Choose a Django project with a database and let's get started!

When we are finished, our virtual machine will be set up to serve any Django project. This will enable you to make an easy swap with a new project (like your belt). We'll show you how later.

In this first section, we will be navigating around on our local machine. If you are using Unix (Mac), or Linux, these commands should look familiar to you. If you are on Windows, you will want to use git bash (i.e. not command prompt) for the purposes of deployment.  These commands will also work in git bash.

1. Make sure the appropriate virtual environment is activated.
2. Once the virtual environment is activated, navigate into the correct project directory (same level as manage.py). We need to take a snapshot of all the installed pip modules into a .txt file. We'll use this file to install all of the required pip modules on our remote machine with a single command.

```md
(djangoPy3Env) project_name$ pip freeze > requirements.txt
````
Open the requirements.txt file and, if they exist, remove pygraphviz, pydot and anything with MySQL in it. These modules can be tricky to install and require additional installations, so we remove them now to prevent problems later.
4. Time to make a git repo! Make sure you're in the project directory (the same level as manage.py). First, let's create a [.gitignore](https://git-scm.com/docs/gitignore) file.

```md
(djangoPy3Env) project_name$ touch .gitignore
````
As the name implies, your gitignore file tells git to ignore any files, directories, etc. you include in the file.

5. Open your .gitignore file in your text editor and add these lines:

### project_name/.gitignore
```md
.vscode
env/
venv/
__pycache__/
.vscode/
db.sqlite3
````
6. Now initialize a git repository:
```md
(djangoPy3Env) project_name$ git init
(djangoPy3Env) project_name$ git add --all
(djangoPy3Env) project_name$ git commit -m "initial commit"
````

7. Create a new [GitHub](https://github.com/new) repo on GitHub. Copy the url of the new repository.
In the terminal, run the commands (GitHub also provides these instructions upon repo creation):
```md
(djangoPy3Env) project_name$ git remote add origin https://github.com/your_github_username/your_github_repo_name
(djangoPy3Env) project_name$ git push origin master
````
# EC2 | Intro
### Objectives:
- Rent space from Amazon Web Services (AWS)
- Create an EC2 instance on AWS
<hr>
While there are many services out there that help with application deployment, we'll be using Amazon EC2. This service provides easily scalable servers and storage space in the cloud that makes deployment easy. Also, the lowest-tier servers are free. We are going to be renting some space on a computer owned by Amazon.

We have been using our own computer, localhost, to host our applications for us. Our computer was not designed to be a server, it was designed to be a client. Amazon has some powerful computers that can run multiple high traffic applications so we will be renting a small corner of a very large and powerful server computer.

Before we get started, make sure you have signed up for AWS Free Tier [here](http://aws.amazon.com/free/). AWS requires you to provide a credit card during sign up, but don't worry; AWS will only charge you if you purchase non-free services. AWS will not charge you upon signing up. (In this chapter, we will demonstrate how to run a free instance. Amazon EC2 offers up to 1 year of free use so that programmers like us can enjoy the free service.)

1. Log in to the AWS console at [https://aws.amazon.com/](https://aws.amazon.com/)
2. Once you have logged in, click on Services and click on EC2.

![](2-ec2.png)
3. Launch a new instance from the EC2 Dashboard by clicking Launch Instance as shown below.

![](3-launch-instance.png)
4. Select **Ubuntu Server 18.04, SSD Volume Type** option. Do NOT select Ubuntu 16.04
![](Screen_Shot_2019-07-16_at_3.00.58_PM.png)

5. Select the t2.micro option and click Review and Launch.

![](5-review-launch.png)
6. Click the Edit security groups link in the lower right corner.

![](6-edit-sec-groups.png)

7. SSH option should be there already. Update its source to MyIP. Click the add a rule button and add HTTP and HTTPS, set source to Anywhere, and then click Review and Launch.

![](8-completed-rules.png)

(If you plan on reconnecting to this instance from a different location, see the Reconnecting module at the end of this chapter.)

8. Next, you'll be asked to create a key file. This is what will let us connect and control the server from our local machine.

Name your pem key whatever makes the most sense to you as shown in the next step. Give it a generic name, not the name of your project, as we can reuse this key.

![](9-download-pem.png)

9. Click Download Key Pair. The key will automatically be saved wherever your browser saves by default. This next part is very important! Put your pem key in a file that has no chance of EVER being pushed to GitHub or anywhere public. You should not send this file via email, or in any other way make it publicly available:

![](1-pem-key-folder-path.png)

10. After launching your instance, you will see a screen with lots of information. Scroll to the bottom of the page and click View Instances.
![](10-view-instance.png)

11. (Optional) Once you have several instances running, you will want to be able to identify what your different instances are for. We have the option of naming our instance, so let’s do so now by clicking on our instance’s name column as shown.

![](11-name-instance.png)


