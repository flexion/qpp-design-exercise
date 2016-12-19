# qpp-design-exercise
QPP Design Exercise for CMS
## Design Process
### 1. Identify persona and user story.
1. Name and description of persona
1. Epic or story of the format "As a <persona> in order to <persona goal> I want to <system behavior>.
### 1. Refine the hypothetical Backlog (Scrum Team).
1. The PO explains the persona and tells the user story.
1. Team asks clarifying questions
1. They negotiate and converge on draft acceptance criteria.
1. The user story card is extended with the draft acceptance criteria. The criteria capture the business start state of the system and the end state. The detailed interactions in between are not included.
The team “points” the user story using other stories as benchmarks. The story card is extended to show the results of the pointing exercise (median points).
1. NOTE: A Definition of Done (DoD) document (checklist) exists that the team has created that it applies to all stories as they are developed.
  1. 100% automated test coverage of all code we write.
  1. Linters indicate zero problems.
  1. User documentation is extended.
  1. UAT is complete and passes all tests. All UAT tests have been automated.
  1. All code is checked in.
  1. Etc.....
### 1. Plan the hypothetical Sprint (Scrum Team).
1. The PO goes through stories in value-flow rate order.
1. The team reviews and discusses the story with the PO. The team adjust estimates and acceptance criteria as needed.
1. The team decides which stories are to be included into the sprint, based on velocity and story points. The story above is accepted into the sprint.
1. The Scrum team crafts a Sprint Goal that unifies all stories accepted into the sprint.
1. The Scrum team whiteboards a static design for subsuming the user story into the system that aligns with the system’s metaphor and general UX tenets and guidelines.
1. The Scrum team crafts a cross-functional task list require to get the story to done. The list includes direct interactions between UX designers and users that will result in a static low-fidelity static design. Most of the dynamic aspects of the design are deferred to tasks that include implementing the static design as a dynamic working system.
### 1. Execute the hypothetical Sprint (Scrum Team).
1. UX designer(s) perform the initial UX tasks (collaborate with user and FE Dev) to develop low-fidelity static design options resulting in whiteboard photos of low-fidelity options.
1. FE Dev to create dynamic (shallow working) options in html/css (collaborate with user and UX designer).
1. The PO and user select which option to pursue.
1. Automated tests (ATDD/BDD) are written to capture the expected behavior, and integrated with the CI/CD pipeline.
1. The development team collaborates to fully build out the user story and its supporting unit tests. Implementation decouples design, style, and function to the greatest extent possible. We create a “Clean Architecture”.
1. The team works to account for all items in the story’s DoD Checklist.
### 1. Review the hypothetical Sprint
1. The team demos that the system meets the acceptance criteria and DoD for the story.
1. All system artifacts are turned over to the PO. (They are in GitHub.).
1. A working version of the system is accessible to the PO.

## Installation
### Prerequisites
Node 4 or higher, together with NPM 3 or higher.

### Installation
Install project dependencies with `npm install`. 

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

### Further help

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
