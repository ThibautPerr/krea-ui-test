# Multi Step Form - Level 2

Your task is to **build a ticket-ordering frontend app** that:

1. Collects user input.
1. Uses correct input types for each field.
1. Validates the fields according to the validation rules provided below.
1. Preserves the state between steps.
1. Displays the collected information on the last step.
1. Makes the provided E2E tests pass.

Please agree with your hiring team regarding the tech stack choice.

Here's the mockup with hints:

<img width="750" alt="Mockup with hints" src="https://user-images.githubusercontent.com/1162212/138476002-0be62ddc-3ff5-4450-a7e1-52c47500660f.png">

Feel free to tweak the UI, but please ensure that the following HTML is in place.

### Navigation elements

Each screen of the application contains navigation links. There should be a link to every step of the wizard form. Each step of the form should also contain the "Submit" and "Back" buttons.

We use `data-testid` attributes to identify those elements, so make sure you provide them.

### The form steps

The inputs on the form steps should have the following `data-testid` attributes:

#### Step 1

```html
<form ...>
  <input data-testid="firstName" ... />
  <input data-testid="lastName" ... />
  <input data-testid="age" ... />
  <button data-testid="submit" />
</form>
```

#### Step 2

```html
<form ...>
  <input data-testid="phone" ... />
  <input data-testid="email" ... />
  <button data-testid="submit" />
  <button data-testid="back" />
</form>
```

#### Step 3

```html
<form ...>
  <input data-testid="seat" ... />
  <input data-testid="food" ... />
  <input data-testid="allergies" ... />
  <button data-testid="submit" />
  <button data-testid="back" />
</form>
```

#### Result

On the results page we expect to see the values collected by the form.
Each element containing the value should have a `data-testid` field with the corresponding `field name`:

```html
<div data-testid="<field name>">value</div>
<button data-testid="back" />
```

> Here we use `div` as an example element, in your application it can be a `tr`, `span` or any other element.

### Validation rules

Form steps are expected to have the following validations:

#### Step 1

- `firstName` is a required field.
  - **Validation message:** `First name is a required field`
- `firstName` should not contain numbers.
  - **Validation message:** `First name should not contain numbers`
- `lastName` is a required field.
  - **Validation message:** `Last name is a required field`
- `lastName` should not contain numbers.
  - **Validation message:** `Last name should not contain numbers`
- `age` is a required field.
  - **Validation message:** `Age must be a number`
- `age` should be a positive number.
  - **Validation message:** `Age should be positive`

#### Step 2

- `email` is a required field.
  - **Validation message:** `Email is a required field`
- `email` should have correct email format.
  - **Validation message:** `Email should have correct format`
- `phone` is a required field.
  - **Validation message:** `Phone number is a required field`

#### Step 3

- `seat` is a required field.
  - **Validation message:** `Seat is a required field`
- `food` is a required field.
  - **Validation message:** `Food is a required field`
- `allergies` is a required field.
  - **Validation message:** `Allergies is a required field`

## Before you get started

### If you run into a problem

Head over to [our community on GitHub](https://github.com/orgs/DevSkillsHQ/discussions/categories/help) to get assistance.

### Import a boilerplate project

We have created a set of boilerplate projects for different tech stacks to help you get started quicker.

To import a boilerplate project:

1. Check out [this list](https://help.alvalabs.io/en/articles/7972852-supported-coding-test-boilerplates) to pick a desired boilerplate and copy its name (e.g., `frontend-boilerplate-react-nextjs`).
2. Go to the "Actions" tab of your GitHub repository and select the "Setup boilerplate" workflow in the left side panel.
3. In the "Run workflow" dropdown, paste the previously copied boilerplate name along with the branch name where you want the boilerplate to be imported (e.g., `implementation`) and click the "Run workflow" button.
4. After the workflow has finished, your selected boilerplate will be imported to the specified branch, and you can continue with your task there.

<details>
<summary>If you instead want to use a custom setup, complete the steps below to make the E2E tests run correctly.</summary>

1. Update the `baseUrl` (where your app will run) in [cypress.config.js](cypress.config.js).
2. Update the [`build`](package.json#L5) and [`start`](package.json#L6) scripts in [package.json](package.json) to respectively build and start your app.
</details>

### Working in a Gitpod environment

If you prefer to avoid installing dependencies like Docker or npm on your local machine, Gitpod offers a handy solution. It provides free access to preconfigured, in-browser IDEs that are ready for immediate use.

To utilize this for your repository, here's what you need to do:

1. Go to 'https://gitpod.io/#your-repo-url', replacing 'your-repo-url' with the actual URL of your repository. For instance, 'https://gitpod.io/#https://github.com/octocat/Hello-World'.
2. Authenticate using your GitHub account.

By following these steps, you'll quickly find yourself in an environment tailored for your coding test.

### Try running the E2E tests locally

```bash
npm install
# Run your app here
npm run test
```

## What we expect from you

1. Fulfil the requirements in the task description above.
2. Ensure that state management is well organized.
3. Avoid duplication and extract re-usable modules where it makes sense. We want to see your approach to creating a codebase that is easy to maintain.
4. Clean up your code as if it was used in production.
5. Push your code to the new `implementation` branch. We encourage you to commit and push your changes regularly as it's a good way for you to showcase your thinking process.
6. Create a new pull request, but please **do not merge it**.
7. Document the tech decisions you've made by creating a new review on your PR ([see how](https://www.loom.com/share/94ae305e7fbf45d592099ac9f40d4274)).
8. Await further instructions from the hiring team.

## Time estimate

Between **45-90 minutes** depending on your experience level + the time to set up the project/environment and understand the task (go with one of the provided boilerplates to move quicker). 

But don't worry! There is no countdown. This number is for you to plan your time.

---

Authored by [Alva Labs](https://www.alvalabs.io/).