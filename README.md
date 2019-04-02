[React 16.6 - The Complete Guide (incl. React Router & Redux)](https://www.udemy.com/react-the-complete-guide-incl-redux/)

> Section 22

> Bonus: Next.js

> Lectures 313 - 422

415. 
Now we have that important file system thing
I was talking about. In Next.js, the file system is our main API,
we don't use React router with Next.js to create routes and allow the user to visit /auth/user
and so on, instead we create folders and files to reflect our URLs in the file system
and Next.js, the package will automatically pass that and use its own internal router to handle all the heavy lifting.
Now along the way, it pre-renders the content we load as pages on the server, it automatically
code splits, so lazy loads that, all of that out of the box without us configuring anything,
that is why Next is such a great package and could be worth a look in your next project.
A lot of stuff is just working out of the box there at the price of having to keep a certain file structure, that file structure is mostly about that pages folder,
let's create it!