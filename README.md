# Confetti

## 📈 How I did it

1. First I used create-react-app with TS: `yarn create react-app confetti --template typescript`
   It's great because it comes with webpack, Babel, ESLint and RTL (React Testing Library) so you don't have to do anything else to set up your working environment

   + prettier
   + stylelint? && stylelint-config-prettier

2. Think of the structure.
   My app is going to have authentication, so I'm needing mainly 2 intefraces: login/register and app

3. Let's go with the login first. It was the first time for me doing this, so I followed this tutorial https://surajsharma.net/blog/react-login-form-typescript

## 🤗 Thanks

I learned how to create a React login form using useReducer hook and Typescript on https://surajsharma.net/blog/react-login-form-typescript


-------
REACT DOC

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
