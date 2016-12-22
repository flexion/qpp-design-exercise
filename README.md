# qpp-design-exercise
  * [Approach](#approach)
  * [Design Process Steps](#design-process-steps)
  * [Installation](#installation)

## Approach
### Our Response
While there were multiple response options allowed for in this design exercise, ranging from a written narrative to a fully working prototype and everything in between, we chose to build a clickable prototype using the web technologies that the team working on the exercise could deliver the fastest, with the rapid change cycles necessary to support a dynamic user feedback cycle. 

Our prototype is written entirely in client-side code: ```HTML``` , ```CSS``` and ```JavaScript``` with test data populated using a ```json``` array and storing session data in ```HTML5 Local Storage``` using a ```RESTful API``` call. 

Our chosen technologies include:

* AngularJS 2.0 - https://angular.io/ with ARIA accessibility component
* Angular CLI - https://github.com/angular/angular-cli
* Webpack - https://webpack.github.io/
* Draft U.S. Web Design Standards - https://standards.usa.gov/
* Protractor - http://www.protractortest.org/
* Karma - https://karma-runner.github.io/1.0/index.html
* Sass - http://sass-lang.com/
* Node.js - https://nodejs.org/en/
* Node Package Manager - https://www.npmjs.com/

We've elected to deploy to GitHub Pages for this project.

### Our Agile Dev Process

![Flexion Agile Dev Process](https://github.com/flexion/qpp-design-exercise/blob/master/project_assets/design-deliverables/flexion_agile_dev_nethodology_screen.png)

## Design Process Steps
Below are the steps we would normally take to develop a user story. Because this is a demo constructed in an abbreviated time frame by a partial team, some of the steps are "stubs", listed so you can see where they fall in the process. Links will take you to the artifacts that are associated with the step in the process.

Also, each story goes through all of these process steps. The number of user stories that go through the cycle together is a function of the maturity of the Scrum team. As we improve our processes, the size of each "batch" decreases while the value delivered each sprint increases.

### 1. Identify persona and epic or user story.

The purpose of identifying personas and their epics and user stories is simply to understand the problems that need to be solved.

1. **Name and describe [the persona](https://github.com/flexion/qpp-design-exercise/blob/master/project_assets/design-deliverables/personas/QPP.Persona.-.Debra.pdf).**

1. **Tell the user story.** At this point, we recommend that the PO focus on business-level stories so that option space of system interactions (to achieve the business goal) is as large as possible. The UX design process explores this space of options. Here is the user story we are assuming for this exercise:
   
   ```
   As a Practice Manager, in order to manage my practice, I must be authorized to manage my practice.
   ```

### 2. Refine the Product Backlog.

The purpose of refining the backlog is to subsume new PO goals into the backlog with just enough detail to be able to prioritize it.

1. **The PO explains the persona and tells the user story.**

1. **Team asks clarifying questions.**

1. **They negotiate and converge on draft acceptance criteria.** Acceptance criteria are the business conditions that must be true when the story is successfully completed. Detailed user interactions are not included but emerge during the development process.

   ```
   A profile for the practice manager sufficient to authorize them exists.
   Permission to manage the practice has been granted and is visible.
   ```

1. **The team estimates the value-flow rate relative to other user stories.** Two components are inputs to value-flow rate; relative cost of delay (estimated by business) and relative duration (estimated by Scrum team).
   
### 3. Plan the Sprint.

The purpose of Sprint Planning is to pull enough work into the next upcoming sprint to keep the team allocated but as focused as possible in their current state. The team drafts a plan for how to organize the work in the sprint. The granularity of atomic user stories for the Product Owner will likely require that they span multiple sprints, especially when UX research, testing, and deployment are included. So sprint planning is also where atomic PO user stories might be decomposed into smaller demonstrable user stories that can be ingested into the sprint.

1. **The PO introduces upcoming stories in value-flow rate order.**

1. **The team reviews the story with the PO.** Acceptance criteria and story point estimates are adjusted as needed. (We used a [GitHub project as a proxy for a story card](https://github.com/flexion/qpp-design-exercise/projects) for the purposes of this design exercise.) 

1. **The team accepts stories into the sprint**. This decision is based on measured velocity and estimated story points. If the next story is too large to fit into the sprint, the team divides the acceptance criteria into pieces and writes new stories based on those. This repeats until a story can be accepted.

   NOTE: The first 20% of story points a team accepts into each sprint comes off of its own "Operational Excellence" backlog. This is the team's continuous improvement queue.

1. **The team crafts a Sprint Goal.** The sprint goal is a unifying goal that binds together all user stories accepted into the sprint.

1. **The team whiteboards a static user task list.** This exercise used to think about the logical steps to achieve the goal of the story. Thinking through these steps helps the team subsume the user story into the system and consider how to implement them in a manner consistedn with the system’s metaphor and general UX tenets and guidelines. For example:

   ```
   1. User verifies email.
   2. User completes profile.
   3. User finds their practice.
   4. User submits their profile to manage the practice.
   ...
   5. User verifies that they have been authorized to manage the practice.
   ```

   These tasks or goals also serve as candidate child stories should it be determined that the parent story is too large.

1. **The Scrum team drafts a [cross-functional task list] (https://github.com/flexion/qpp-design-exercise/projects/1) required to get the story to done.** The list includes *all* tasks from UX research to coding to testing to deployment. These tasks are just abstract enough to avoid becoming obsolete once related details of the work start to take shape.

### 4. Execute the Sprint.

This is the bulk of the two-week sprint where the development team develops. This includes identifying and evaluating options, developing them, testing them, and completing all tasks in the Definition of Done (DoD).

1. **UX designers develop [low-fidelity static design options](https://github.com/flexion/qpp-design-exercise/blob/master/project_assets/design-deliverables/wireframes/QPP-wireframes.pdf
).** These are the initial UX tasks done in close collaboration with the user and Front-End Developers that result in wireframes and a user flow, illustrating the steps a user would take to complete the task.

1. **Front-End Developers create [static options in html/css](https://github.com/flexion/qpp-design-exercise/tree/master/project_assets/design-deliverables/Round%201).** This collaboration with the user and UX results in a shallow working click-through.

1. **Review of the static click-through producing [comments and suggestions](https://github.com/flexion/qpp-design-exercise/blob/master/project_assets/design-deliverables/Round%201/team-feedback/QPP-RD1-comments.pdf).** This review is a collaborative exercise that includes the user, UX designer, and Front-End Developer identifies opportunities for improvement.

1. **Implement [improvments from feedback](https://github.com/flexion/qpp-design-exercise/tree/master/project_assets/design-deliverables/Round%202).** The Front-End Developer and UX Designer make improvements to the static click-through based on the comments and suggestions recieved in the previous step.

1. **Create automated ATDD/BDD tests from the statuc click-through.** These tests drive production development and are integrated into the CI/CD pipeline.

1. **The development team collaborates to fully build out the user story and its supporting unit tests.** Implementation decouples design, style, and function to the greatest extent possible. We create a “Clean Architecture”.

1. **[The user story is validated](https://github.com/flexion/qpp-design-exercise/project_assets/user-research/QPPTest-Report.pdf)**. Validation is accommplished by testing with real people who have been identified as likely prospective users of the system. You can view [video snippets of several test users'](https://flexion.wistia.com/medias/hs5ka2xir6) major pain points. A password is required to access the video: ```cmsuser1```

1. **Recommendations from the user testing are placed into the project backlog for implementation in the application.**

1. **The team achieves all items in the story’s DoD Checklist.**

### 5. Review the Sprint

The Sprint Review is the accountability ceremony, where the team demos anything that meets the Definition of Done by time this meeting takes place, or explains why things they expected to complete weren't. The PO accepts or rejects their work. The team also discusses why stories that they expected to complete aren't complete yet.(Hopefully, there have been enough regular interactions with the PO that the team already knows that the completed story will be accepted.)

1. **The team demos that the story.** The demo covers the acceptance criteria for the story and is only given for stories that meet a predefined subset of the Definition of Done.

1. **Hand over [system artifacts](https://github.com/flexion/qpp-design-exercise).** In this case, all artifacts are committed or uploaded into GitHub to which the PO and government have access.

1. **A [working version of the system](URL to clickable prototype here) is accessible to the PO.**

## User Instructions
Visit and interact with the application at <insert github pages url here> 

For the purpose of this exercise, the application is pre-populated with test data. As a user you will complete the following steps:

1. Begin at the landing page which includes a login form. Please login with the username: user@presencehealth.org and the password: password

1. After successful login, you are redirected to a page outlining the steps that you have completed thus far, and the next step to take in the process. Click 'complete profile'

1. You are taken to a profile form. Fill out the profile form and after all required fields are filled in, click 'Submit'

1. You are taken back to the page outlining the steps in the process. It now shows the next actionable step "connect with practice"

1. Clicking "connect to practice" takes you to a page asking you to search for a practice. Because we have pre-populated the test data, you can enter anything into the search input and click 'Search'

1. Hypothetical search results are returned. Next to one of the practices, choose which role you would like to connect to the practice as and click 'connect'

1. You will be redirected to your Dashboard and see a success message with any next steps.

1. On your dashboard, you will see all of your pending and approved practice connections as well as your pending and approved surrogates, with the ability to approve, deny, or revoke access on each surrogate.

1. All of the data entered is saved in your browser's local storage. If you want to start from the beginning with a clean user, while logged in, click 'clear profile' link in main menu.

## Developer Installation Instructions
### Prerequisites
The following must be installed on your computer
Node 4 or higher https://nodejs.org/en/, together with NPM 3 or higher https://www.npmjs.com/, and Angular CLI https://cli.angular.io/

Install angular-cli globally: `npm install -g angular-cli@1.0.0-beta.24`

### Clone Project
git clone https://github.com/flexion/qpp-design-exercise.git qpp-design-exercise

### Installation
From the command line, navigate to the project root. Install project dependencies by executing `npm install`. 

### Deploy on development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development Instructions
The application is built with the javascript framework Angular 2, and was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1. 

Webpack is used for building static assets. We are using Protractor for end-to-end tests, and Karma for unit tests. CSS is compiled from SASS

### File Structure
The following lists our file structure. The main development files are located in src/app. Inside that folder lives sub-components, each relating to a specific function or process in the application.

```
qpp-design-exercise/
 ├──e2e/                       * End-2-end testing 
 |   ├──app.e2e-spec.ts
 |   ├──app.po.ts         
 │   └──tsconfig.json        
 │
 ├──project_assets/  
 |   ├──design-deliverables/    * Mockups, wireframes, static html 
 |   ├──user-research/          * User research documentation 
 │   │
 |
 ├──src/                       * our source files that will be compiled to javascript
 |   ├──index.html             * index page
 |   ├──main.ts                * Entry file for browser environment 
 |   ├──polyfills.ts           * our polyfills file
 |   ├──tests.ts               
 |   ├──tsconfig.json
 │   │
 │   ├──app/                          * application files
 │   │   ├──app.component.html       * header and main content wrapper
 │   │   ├──app.component.spec.ts    * tests for app.component
 │   │   ├──app.component.ts         * component logic
 │   │   ├──app.modules.ts           * include sub-modules
 │   │   ├──app-routing.module       * include sub-modules
 │   │   ├──is-authenticated         * authentication check
 |   |   ├──is-authenticated.ts       * user authentication check
 |   |   ├──_models/                  * Data models
 |   |   ├──_services/                * Services
 |   |   ├──dashboard/                * Dashboard view, logic, testing
 |   |   ├──guard/                    * Authetication asset
 |   |   ├──login/                    * Login view, logic, testing
 |   |   ├──practice/                 * Pactices view, logic, testing
 |   |   ├──profile/                  * Profile view, logic, testing
 |   |   ├──provider-connection       * provider connect grid view, logic, testing
 |   |   ├──registration/             * Registraiton view, logic, testing
 |   |   ├──steps/                    * User steps view, logic, testing
 |   |   ├──usa-official/             * Partial containing official usa website copy
 │   │
 │   └──assets/                * static assets are served here
 │       ├──css/               * CSS generated from SASS
 │       ├──data/              * test data json files 
 │       ├──fonts/             * uswds fonts 
 │       ├──img/               * image assets  
 │       ├──js/                * uswds javascript
 │       └──sass/              * sass file importing uswds assets
 │
 │
 ├──angulars-cli.json          * angular cli config
 ├──protractor.conf.js         * protractor config
 ├──karma.conf.js              * karma config
 ├──package.json               * npm package dependencies
 └──tslint.json                * typescript lint config
 ```

## Development Tasks

### Generate new componenets

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

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
