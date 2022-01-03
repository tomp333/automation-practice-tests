# Automation Practice Tests

## Current Test scenarios:

1. Login and logout success
2. Login fail for wrong password
3. Login fail for wrong email
4. Buy 2 units of first element from the bestsellers list
5. Buy first element from search result
6. Add few elements to the cart and purchase them
7. Sign up test success
8. Sign up test fail for already registered user

The Main focus when creating this tests was to cover few most common scenarios and organize tests properly. I've added fixture for users data for the sign up and username and password to the custom cypress.env.json. I have also moved some of the functionality related to page interactions to commands but also moved some  to functions (signup_spec.ts) according to best practices described in this article: https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/.

## Current doubts and issues:

- Some selectors could be adjusted
- Not sure if every command created in commands.ts should be there, maybe some of them are to specific for one spec

## How to start:

### Clone the repo:
```
git clone https://github.com/tpichlak/automation-practice-first-tests.git

```
### Install packages:
```
npm install
```

### Run tests in headless mode:
```
npm run test
```
### Run tests in headed mode using:

```
test:chrome:headed
```

### Or you can simply open cypress 
```
npx cypress open
```
