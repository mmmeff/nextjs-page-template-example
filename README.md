# next.js page template example
This project is just a simple example of how one could use inheritance of a Page class to achieve base page elements across their site and reduce repitition across all page classes in a next.js project.

## known caveats:
Currently, the Page element and all of its non-deferred children are re-rendered on every route change. This can be problematic if any of those components maintain any state whatsoever. I believe that next.js' lack of sub-routing support makes this a hard limitation, but I'm still investigating other potential solutions.
