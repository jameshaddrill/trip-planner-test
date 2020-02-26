### Goal

Your assignment is to implement a Plan a Trip Widget that records a user's likes on destination articles and a subsequent dashboard to manage their likes.

### More detailed brief

VisitScotland's users are requesting some way to keep a note of the articles and destinations they like the sound of so that they can create a customised itinerary for their next trip to Scotland.  The planning, UX and development team have agreed on a simple MVP which leverages the user's browser to store their choices in localStorage, so that the user can return to the site in the future and find their choices again. Use the wireframe of the widget and dashboard in the /Designs folder as a starting point.

-   Implement assignment using:
    -   Language: **JavaScript**
    -   Framework: **Vue** (Optional)

### Tasks

- Try and make each commit as close to each defined task below:

    -   Install dependencies, run the app and prisim api to mock the articles DB
    -   GET the list of articles from /api/article and render article titles and snippet content to the Index page
    -   Mark an article as bookmarked so this persists on page reload, change the UI on this action to make it clear an article has been liked
    -   Allow a user to unlike an article (effectively deleting an entry from the plan-my-trip list)
    -   Build out the project to the designs inside the `/Designs` folder
    -   For authentication pass the `"Authorization: Bearer Wookie2019"` header
    -   Parse the API response and display the results as outlined in the design.
    -   Implement a detail view for the article in the list
    -   Make sure that inking to detail pages as well as bookmarking these in the Plan a trip works as expected
    -   Run an accessibility test - note the results before and after refactoring for discussion

### Evaluation Criteria

-   **JavaScript** best practices
-   Routing implemented (list, detail)
-   Bonus: Progressive Web App treatment - leveraging 
-   Bonus: Use any assets you like creatively
-   Bonus: sharing lists via social media

### General notes

Please organize, design, test and document your code as if it were
going into production - then push your changes to the master branch. After you have pushed your code and are happy with it, submit to allan.henderson@visitscotland.com

Enjoy!

The VisitScotland Team
