# interview-challenge

---

This challenge provides candidates with an opportunity demonstrate their skills and experience building web applications. The exercise allows candidates to apply their knowledge of front-end technologies and demonstrate their approach to solving problems.

## The Problem

Build a twitter clone (simplified).

_insert wireframe here_

### Features

Users of this app should be able to:

* Fetch tweets from a database and display them
* Remove tweets
* (Optional) Create users
* (Optional) Filter tweets by user

The app should:

* only present the remove button when there are tweets to remove
* be styled to match the following high-fidelity mockup

![High Fidelity Tweet mockup](react-tweets/screenshots/mockup%20-%20tweet%20high%20fidelity.png)

## Things to look for

* Make it work, then make it complete. Does the candidate look to verify the behavior of their implementation early and often?
* Do they talk out loud about their thought process? Do they respond to working collaboratively?
* Did they finish in the allotted time?
* Did they cover edge cases with tests/examples? (e.g. clicking "remove" on an empty list does not error)
* Did the candidate style their solution to match the high-fidelity mocks? If not, did they justify any deviation with pragmatic reasoning?
* Did the candidate match the expected output provided in the `example-tweet.html` template?
  * Did the candidate convert the HTML template to valid JSX syntax? e.g. use `className` instead of `class`? (REACT)
* Did the candidate write tidy/well structured/idomatic code?
  * Did the candidate use/extract appropriate components? (REACT)
  * Did the candidate use state and lifecycle methods correctly? e.g. use setState rather than modifying state directly (REACT)
  * Did the candidate use template literal strings for interpolation vs building a string/DOM elements manually? (VANILLA)
* Did the candidate handle events effectively? (e.g. Delegated event listener, cleanup of no-longer needed event listeners)
* Did the candidate discuss several approaches to tackling the layout (absolute positioning, floats, inline/flex/grid) and speak to their tradeoffs?
* Does the candidate show concern for cross-browser compatibility?
* Does the candidate show concern for rendering to suit different device sizes? Can the candidate discuss approaches for handling this? (e.g. Responsive css, media queries)
