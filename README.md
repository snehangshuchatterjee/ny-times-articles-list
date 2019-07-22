This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Application Details

This is an application which lists down the most viewed articled from NY Times.

To Run the application on your local system, perform the following steps:

- Clone this repository on your local machine.
- Open command prompt / terminal.
- Navigate to the Project folder containing `package.json` file.
- Run the following command
    ```
    npm install
    ```
- Once npm install is successful, run the following command
    ```
    npm start
    ```
- If you wish to check the code coverage, you can run the following command:
    ```
    npm run test
    ```
## Screenshots

### Desktop

![Image](src/resources/images/articleList_Desktop.png "articleList_desktop")

![Image](src/resources/images/articleLoading_Desktop.png "articleLoading_desktop")

![Image](src/resources/images/articleDetails_Desktop.png "articleDetails_desktop")

### Mobile

![Image](src/resources/images/articleList_Mobile.png "articleList_mobile")

![Image](src/resources/images/articleLoading_Mobile.png "articleLoading_mobile")

![Image](src/resources/images/articleDetails_Mobile.png "articleDetails_mobile")

### Unit Test Coverage

![Image](src/resources/images/coverage.png "Unit Test Coverage")

To Generate the Coverage report, perform the following steps:

- Open command prompt/terminal on your project's base folder
- Run the following command:
    ```
    npm run test
    ```
- Once the test case execution is complete, open the project folder
- Go to the `coverage -> lcov-report` folder
- Open the `index.html` file on your browser. You will get a detailed test coverage report on the browser

## Available Scripts

In the project directory, you can run:

### `npm install`

Downloads all the dependencies mentioned in the `package.json` file required for the app to work properly.
**This command should be run on a fresh clone**

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


