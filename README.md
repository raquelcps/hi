# Specimen Lab | [DEMO](https://raquelcps.github.io/hi) | [CODE](https://github.com/raquelcps/hi/tree/main/src/components/TypeTester)

Specimen Lab is an interactive typography playground built with React for exploring custom typefaces through multiple specimen views. Specimen Lab represents the intersection of my interests in software engineering, typography, and user experience.

<p>
 <img width="700" alt="Font selection demo" src="https://github.com/user-attachments/assets/3ca59f61-b63b-4308-8beb-67e112bb54b7" />
 <br>
 <em>Figure 1: Instantly preview varied typography styles across multiple layout options.</em>
</p>

Rather than treating typography as static images, Specimen Lab allows users to experiment with a font's characteristics in real time and immediately see the results. It demonstrates how thoughtful frontend architecture can support an interface that is both flexible for developers and approachable for users.

The project began as a focused front end exercise while I was rebuilding my software portfolio. I wanted a project small enough to complete quickly, but rich enough to demonstrate thoughtful React architecture, state management, responsive design, and testing. Because I also design typefaces, a specimen viewer was something I personally wanted to use.

<p>
 <img width="700" alt="CSS controls demo" src="https://github.com/user-attachments/assets/c4dc7b54-ef52-4687-9de9-998f5f5474b5" />
 <br>
  <em>Figure 2: Fine-tune size, tracking, and line-height, then copy the optimized CSS with one click.</em>
</p>

I built it inside of my portfolio project repo, which is itself a GitHub Pages template I decided to use to practice React, because I wanted to continue building with React and deploy quickly. Read more about the broader portfolio project [here](#my-portfolio-and-react-practice).

## Features

* Multiple specimen views

  * Single View
  * Paragraph View
  * Waterfall View
  * Grid View
* Adjustable typography controls

  * Font selection
  * Font size
  * Line height
  * Letter spacing (tracking)
* Live CSS generation
* Responsive layouts
* Custom fonts loaded directly into the application
* Automated tests using React Testing Library

## Architecture

One of the primary goals of this project was to build an application that could continue to grow without becoming difficult to maintain.

### Component Organization

The interface is divided into small, focused components with clear responsibilities.

Examples include:

* Toolbar
* Controls
* TextInput
* CssPanel
* Individual specimen views

Each view is responsible only for rendering typography in a particular format, while shared application state lives elsewhere.

This separation makes it straightforward to add new specimen views without rewriting existing functionality.

### Centralized State

Global application state is managed with Redux Toolkit.

Rather than allowing each component to manage its own typography settings, the application's controls update a single source of truth.

This allows every specimen view to stay synchronized automatically while avoiding unnecessary duplication of state.

### View Architecture

Specimen rendering is intentionally separated into independent view components.

Current views include:

* Single
* Paragraph
* Waterfall
* Grid

Each view receives typography settings from shared state and determines only how those settings should be presented.

Because of this structure, adding additional layouts requires very little modification to the rest of the application.

### Styling

Styling combines Bootstrap for layout with styled-components for component-level styling.

This allows layout concerns and component concerns to remain largely independent while making responsive behavior easier to manage.

## Testing

The project includes automated tests using React Testing Library.

Current tests verify:

* Initial rendering
* Toolbar behavior
* Typography control updates
* View switching
* CSS generation
* User interactions

The goal of the test suite is to verify user-visible behavior rather than implementation details, making future refactoring safer.

## Design Philosophy

Specimen Lab is built around a simple idea:

Typography is best understood through interaction.

Instead of presenting a static specimen sheet, the application encourages experimentation. Users can change settings, compare layouts, and immediately understand how typography behaves in different contexts.

That same philosophy influenced the engineering decisions behind the project. Components are intentionally modular, state is centralized, and responsibilities are clearly separated so the application can continue to evolve without becoming difficult to reason about.

## Future Improvements

Potential future enhancements include:

* URL state for shareable specimens
* Variable font support
* Additional specimen layouts
* Dark/light theme persistence
* Downloadable specimen sheets
* OpenType feature controls
* Additional automated test coverage
* Refine the responsive experience

## Technology

* React
* Redux Toolkit
* styled-components
* Bootstrap
* React Testing Library

---

# My Portfolio and React Practice

I wanted to get a portfolio up in a limited amount of time. I also wanted to explore using React. I found this [template](https://github.com/mshuber1981/github-react-portfolio-template/tree/main?tab=readme-ov-file) and it fit the bill perfectly.

I appreciate the accessibility and the documentation. Plus, the layout and overall design is clear and uncomplicated, which means implmenting my edits was pretty simple – even when I went beyond the built in customization options.

Check out the original [template](https://github.com/mshuber1981/github-react-portfolio-template/tree/main?tab=readme-ov-file) by @mshuber1981, it's a nice project.

## Background
While I have several years of experience working with Ruby and Angular, at the time of starting this project it had been almost three years since I had spent any significant amount of time writing code.

I felt ~~a bit~~ incredibly rusty and intimidated. Sometimes feeling like I forgot everything. Not true, but it felt that way. 

Besides wanting to start a project and get my coding confidence back up, I was also curious about React because I hadn't worked with it much. I thought it would be good practice to work my way through the documentatation and component architecture.

## Customizations
- New fonts
- New SiteCredits section component
- Various styling adjustments

## TODOs
I plan to:
- submit an issue for a bug I found in ProjectCard component
- make the site tab navigable
- add tests (at least integration tests)



