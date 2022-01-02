# Automation Practice First Tests

## Current Test scenarios:

1. Login and logout success
2. Login fail for wrong password
3. Login fail for wrong email
4. Buy 2 units of first element from the bestsellers list
5. Buy first element from search result
6. Add few elements to the cart and purchase them
7. Sign up test success
8. Sign up test fail for already registered user

The Main focus when creating this tests was to cover few most common scenarios and organize tests more or less properly. I've added fixture for users data for the sign up and username and password to the custom cypress.env.json. Also moved some of the functionality related to page interactions to commands but also moved some  to functions(signup_spec.ts)

<br>

## Current doubts and issues:

- It is possible that some selectors could be or should be adjusted
- Not sure if every command created in commands.ts should be there, maybe some of them are to specific for one spec
- Generally the code could be probably decomposed a bit better

<br>

## How to start:
<br>

### Clone the repo:
```
git clone https://github.com/tpichlak/automation-practice-first-tests.git

```
<br>

### Install packages:
```
npm install
```
<br>

### Run tests in headless mode:
```
npm run test
```
<br>

### Run tests in headed mode using:

```
test:chrome:headed
```
<br>

### Or you can simply open cypress 
```
npx cypress open
```