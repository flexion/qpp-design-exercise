# qpp-design-exercise
  * [Approach](#approach)
  * [Design Process Steps](#design-process-steps)
  * [Installation](#installation)

## Approach
There are multiple response options allowed for this design exercise, from written documents to a fully working prototype and everything in between. We chose to build a clickable prototype using the web technologies that those working on the exercise could deliver the fastest, with the rapid change cycles necessary to support a dynamic user feedback cycle. These technologies include...

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
   1. User completes profile.
   2. User verifies profile.
   3. User finds their practice.
   4. User submits their profile to manage the practice.
   ...
   5. User verifies that they have been authorized to manage the practice.
   ```

   These tasks or goals also serve as candidate child stories should it be determined that the parent story is too large.

1. **The Scrum team drafts a [cross-functional task list] (https://github.com/flexion/qpp-design-exercise/projects/1) required to get the story to done.** The list includes *all* tasks from UX research to coding to testing to deployment. These tasks are just abstract enough to avoid becoming obsolete once related details of the work start to take shape.

### 4. Execute the Sprint.

This is the bulk of the two-week sprint where the development team develops. This includes identifying and evaluating options, developing them, testing them, and completing all tasks in the Definition of Done.

**Seth. Please add all of your coarse-grained steps below. Overwrite anything I have that doesn't apply. Link to the artifacts that you created that are associated with each step, like I did above.**

1. UX designer(s) perform the initial UX tasks (collaborate with user and FE Dev) to develop low-fidelity static design options resulting in whiteboard photos of low-fidelity options.

1. FE Dev to create dynamic (shallow working) options in html/css (collaborate with user and UX designer).

1. The PO and user select which option to pursue.

1. Automated tests (ATDD/BDD) are written to capture the expected behavior, and integrated with the CI/CD pipeline.

1. The development team collaborates to fully build out the user story and its supporting unit tests. Implementation decouples design, style, and function to the greatest extent possible. We create a “Clean Architecture”.

1. The team works to account for all items in the story’s DoD Checklist.

### 5. Review the Sprint

The Sprint Review is the accountability ceremony, where the team demos anything that meets the Definition of Done by time this meeting takes place, or explains why things they expected to complete weren't. The PO accepts or rejects their work. The team also discusses why stories that they expected to complete aren't complete yet.(Hopefully, there have been enough regular interactions with the PO that the team already knows that the completed story will be accepted.)

1. **The team demos that the story.** The demo covers the acceptance criteria for the story and is only given for stories that meet a predefined subset of the Definition of Done.

1. **Hand over system artifacts.** In this case, all artifacts are committed or uploaded into GitHub to which the PO and government have access.

1. **A working version of the system is accessible to the PO.**

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
