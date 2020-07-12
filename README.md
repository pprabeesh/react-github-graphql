## Design Decisions

The project uses react hooks and graphql to get a list of repos with most number of stars.

Graphql was chosen for performance reasons as the data to be retrieved can be huge.

The UI is made up of simple functional components using react hooks.

Future enahancements can include pagination which can easily be implemented by making small modifications to the existing graphql query.

To run the application please do the following:

### `npm install`

Install all required packages for the project.

### Add PAC token to src/constants.ts

To generate PAC token please read: https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token

Please place your PAC token in AUTHORIZATION_KEY.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
