### **Alif UI kit for React.**

#### How to use?

_Inside you React/Next.js project run:_

    yarn add alif-ui-kit-react

_or_

    npm install alif-ui-kit-react

_Then inside you project import necessary component:_

    import { ButtonColor, ButtonSize, ButtonVariant, Button } from  "alif-ui-kit-react";

_All available components can be viewed in storybook. All available props well documented also there._
[Alif UI kit React Storybook](https://storybook.alif.tj)

#### How to contribute?

_Create an issue or choose an already created and assignee to yourself._
_Clone the repo. Create meaningful branch for developing._
_Keep current style code and follow with current folder structure of the project while developing.
Inside `src/_`folder implement the component from design system. Write tests for the component, referring to previously tests, like in`Button`component. Create a Pull request to main branch, and assign`mhushang`, with `Odinaev444` to reviewers.\*

_In the root first need to run_ `npm pkg set scripts.prepare="husky install"`.
_Inside_ `test_project/*` _folder you can import your component, then run_ `yarn dev` _or_ `npm run dev` _to start the project and develop the component._
