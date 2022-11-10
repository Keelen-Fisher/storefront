# React Redux Week

## Code Refactored: Collaboration with: Luis Rosales

## ***Lab 36: Application State with Redux PHASE 1***

## Before you begin

- Create a UML diagram of the Virtual Store architecture on a whiteboard before you start

> Create a new repository for this project, called ‘storefront’ and work in a branch called ‘redux’

## UML

- ![Alt text](public/assets/UML%20Rough%20Draft%20for%20Lab%2036.png)

## Phase 1 Requirements

- The first of a 4-Phase build of the storefront application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application with initial styling and basic behaviors. This initial build sets up the file structure and state management so that we can progressively build this application in a scalable manner

### [Example of Fully completed Website after this week:](https://virtual-web-store.netlify.app/)

## User Stories

- As a user, I expect to see a list of available product categories in the store so that I can easily browse products

- As a user, I want to choose a category and see a list of all available products matching that category

- As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence

## Technical Requirements

- Create a visually appealing site using [Material UI](https://material-ui.com/)
- Use a Redux Store to manage the state of categories and items in the store
- Display a list of categories from state
- When the user selects (clicks on) a category …
  - Identify that category as selected (change of class/display)
  - Show a list of products associated with the category

## Application Architecture

- Begin with creating your application using create-react-app
- Install Material UI as a dependency
- Write an App component that serves as the container for all sub-components of this application
  - A `<Header>` component which shows the name of your virtual store
  - A `<Footer>` component which shows your copyright and contact information
  - A `<Categories>` component
    - Shows a list of all categories
    - Dispatches an action when one is clicked to “activate” it  
  - A `<Products>` component
    - Displays a list of products associated with the selected category

## Notes on constructing the Redux Store

- Categories
  - State should contain a list of categories as well as the active category
    - Each category should have a normalized name, display name, and a description

  - Create an action that will trigger the reducer to change the active category
  - Update the active category in the reducer when this action is dispatched

- Products
  - State should be a list of all products
    - Each product should have a category association, name, description, price, inventory count

  - Create an action that will trigger when the active category is changed
    - HINT: Multiple reducers can respond to the same actions

  - Create a reducer that will filter the products list based on the active category

- Active Category
  - State should store active category
    - Other components (products, etc) might need to reference this

### Application Structure (Proposed)

    ├── .gitignore
    ├── .eslintrc.json
    ├── __tests__
    │   ├── app.test.js
    │   ├── cart.test.js
    ├── src
    │   ├── index.js
    │   ├── app.js
    │   ├── store
    │   │   ├── index.js
    │   │   ├── categories.js
    │   │   ├── products.js
    │   │   ├── cart.js
    │   ├── components
    │   │   ├── storefront
    │   │   │   └── categories.js
    │   │   │   └── current-category.js
    │   │   │   └── products.js
    │   │   │   └── storefront.js
    │   │   ├── products
    │   │   │   └── details.js
    │   │   ├── cart
    │   │   │   └── simplecart.js
    │   │   │   └── checkout.js
    │   │   ├── header
    │   │   │   └── header.js
    │   │   ├── footer
    │   │   │   └── footer.js
    └── package.json

## Deployment

[Linked to Deployed Site (Using SandBox)](https://codesandbox.io/p/github/Keelen-Fisher/storefront/draft/smoosh-breeze?file=%2FREADME.md)

## [Tests](./src/__tests__/)

## [PR Link](https://github.com/Keelen-Fisher/storefront/pull/1)

## Resources

- [Link to Materials UI ***Getting Started:***](https://mui.com/)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## ***Lab 37: Application State with Redux PHASE 2***

## -UML

## Phase 2 Requirements

- In phase 2, we will be adding the “Add to Cart” feature to our application, which will allow our users to not only browse items in the store, but also select them and have them persist in their “shopping cart” for later purchase.

## User-Stories

- As a user, I want to choose from products in the list and add them to my shopping cart
- As a user, I want to see the products that I’ve added to my shopping cart so that
- As a user, I want to change the quantity of items I intend to purchase in my shopping cart
- As a user, I want to be able to remove an item from my shopping cart

## Application Flow

- User sees a list of categories
- … Chooses a category and sees a list of products
- … Clicks the “Add to Cart” button on any product
- … Clicks the “Cart” link in the header
- … Sees a list of all products in the cart
- … Clicks the delete button on an item and sees the item removed
- … Changes the quantity selector on an item and sees the cart total change

## Technical Requirements / Notes

- Continue to use Material UI Components for layout and styling
- Add a “Cart” indicator to the header, like this: Cart (0)
- Create a new Cart component to show the items in the user’s cart

## Application-Architecture

- Add a new component to the page: `<SimpleCart />`
  - Displays a short list (title only) of products in the cart
  - This should be present at all times

- Home Page Operation:
  - When the user selects (clicks on) a category …
    - Identify that category as selected
    - Show a list of products associated with the category, that have a quantity > 0
    - Add an “add to cart” button to each product

  - When a user clicks the “add to cart” button add the item to their cart
    - In the `<SimpleCart/>` component, show a running list of the items in the cart (just the titles)
    - Change the (0) indicator in the header to show the actual number of items in the cart
    - Reduce the number in stock for that product

### Manage state in a Redux store with multiple reducers/actions

- Categories
  - State should be a list of categories as well as the active one
    - Each category should have a normalized name, display name, and a description
  - Create an action that will trigger the reducer to change the active category
  - Update the active category in the reducer when this action is dispatched

- Products
  - State should be a list of all products
    - Each product should have a category association, name, description, price, inventory count
  - Create an action that will trigger the reducer to filter the product list when the active category is changed
    - HINT: Different reducers can respond to the same actions

  - Create a reducer that will filter the products list based on the active category
  - Create an action that will trigger the reducer to reduce the stock counter
  - Create a reducer that reduces the # in stock when that action is dispatched

- Cart
  - State should be an array of products that have been added (all product details)
  - Create an action that will trigger the reducer to add the selected item to the cart
    - Hint: this could be the same action type as you create for the Products reducer
  - Create a reducer that adds the product to the array of items in state

## Deployment-

[Linked to Deployed Site (Using SandBox)](https://codesandbox.io/p/github/Keelen-Fisher/storefront/draft/spring-bush?file=%2FREADME.md)

## [Test](./src/__tests__/)

## [PR - Link](https://github.com/Keelen-Fisher/storefront/pull/3)

## Resources-

- [Link to Materials UI ***Getting Started:***](https://mui.com/)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## ***Lab 38: Application State with Redux PHASE 3***

## Phase 3 Requirements

- In phase 3, we will be connecting our Virtual Store to a live API so that our data is persistent and able to be separately managed.

## User-Story

- The user stories from Phases 1 and 2 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

  - As a user, I want to interact with live inventory so that I have confidence that the displayed products are in stock

  - As a user, I want to know to that when I add an item to my cart, that it is removed from inventory so that no other users can purchase it

## Technical Requirements/Notes

- Continue to use Material UI Components for layout and styling
- Load the category and product list from a remote API on page load.
- Update the product quantity in stock when adding items to (or removing from) the cart
- Continue to use multiple reducers

Notes on State Management

- You will need to use useEffect() to dispatch a load action on the initial page load
  - This will need to use thunk as it will be asynchronous

- When adding/removing/updating items in the cart, the action/reducer will need to update the server
  - Perform the appropriate post, put, or delete action via API call (using thunk in an async action) on each of these actions as performed by the users

## Deployment -

[Linked to Deployed Site (Using SandBox)](https://codesandbox.io/p/github/Keelen-Fisher/storefront/draft/spring-bush?file=%2FREADME.md)

## [Tests-](./src/__tests__/)

## [PR-Link](https://github.com/Keelen-Fisher/storefront/pull/7)

## Resource

- [Link to Materials UI ***Getting Started:***](https://mui.com/)
