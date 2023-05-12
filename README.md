### Steps to setup Firebase Emulator for storage 
- First create a project on firebase console

- Set its location by clicking settings icon on right side of "Project
  Overview" in left panel and go to general tab, there is "Default GCP
  resource location " choose us-central or your desired location.

- Now install the firebase cli globally if not already installed in your
system. By running "npm install -g firebase-tools".

- Create a folder in your working directory like "firebase-emulators" and
navigate to it in terminal

- Run "firebase init" command This command will prompt you to select the
Firebase services you want to use. Choose Firebase Storage and follow
the prompts to set up your project.

- Install the Firebase Storage Emulator: Run the following command to
install the Firebase Storage Emulator: "firebase
setup:emulators:storage".

- Start the emulator: Run the following command to start the Firebase
Storage Emulator:"firebase emulators:start \--only storage"

Now you can see UI of emulators at http://localhost:4000 and your
emulator would be running at http://localhost:9199
