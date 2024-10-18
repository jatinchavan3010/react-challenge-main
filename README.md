# React Challenge

## Live Demo

You can view the deployed application here - https://main.demfo0mlr4isp.amplifyapp.com/

## Instructions

This repository includes a naive implementation of a React application designed to search for, and display, information about countries (using https://restcountries.com/).

Your task is to refactor and improve the application.

Focus on clean, maintainable code and your proficiency with components, state management, and API integration.

Commit your changes as you go & submit your work via a GitHub repository link.

Update this `README` with anything that you'd like to do if you had more time.

### Things to consider

1. **Accessibility** - 
	- Using semantic HTML elements like section, h3, article, and more.
	- Adding aria-labels for interactive elements and managing keyboard navigation with the Enter key for the search input.
 - Tools used: aria-labels, role="status", button labels.

2. **Robust error handling**
	- Implementing a dedicated ErrorCard component to display clear, contextual error messages (e.g., “No countries found”).
	- Using try-catch blocks and custom error messages to manage API errors and unexpected issues.
  - Tools used: try-catch, ErrorCard component, custom error messages.

3. **Testing**
	- Writing unit tests for components like CountryList, CountryCard, and SearchBar.
	- Using Jest and React Testing Library to test rendering, user interactions, and content display.
  - Tools used: Jest, React Testing Library.

4. **Responsiveness**
	- Utilizing CSS Flexbox, Grid, and media queries to adapt layouts for mobile, tablet, and desktop screens.
  - Tools used: CSS Flexbox and media queries.

5. **Ease of updating the data source**
	- Centralizing API calls in a modular fetchCountries function, making it easy to update the API endpoint in one location.
	- Defining constants for the base URL (BASE_URL) to avoid hardcoding strings throughout the application, making it easier to modify the API URL if needed.
  - Tools used: Centralized fetchCountries function, constants for the base URL.

6. Appearance: Style is secondary; however, a basic, user-friendly UI is appreciated
7. Anything else: You are welcome to add any features that highlight your capabilities

### Additional Improvements If I Had More Time

1. Additional Filters and Sorting Options.
2. Error Boundary Component as the application grows for handling render errors gracefully.
3. More test cases particularly with filters and search as the application grows.
4. It would be beneficial to implement pagination when search results become long.
5. Implement caching techniques to optimize and make the app more efficient.

## Getting Started

### Scripts

1. Install packages

```sh
npm install
```

2. Run locally

```sh
npm run dev
```

3. Test locally

```sh
npm run test
```
