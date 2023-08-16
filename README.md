### **Alif UI kit for React.**

#### How to use?

*Inside you React/Next.js project run:*

	yarn add https://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:x-oauth-basic@github.com/alifcapital/alif-ui-kit-react.git
*or*

    npm install https://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:x-oauth-basic@github.com/alifcapital/alif-ui-kit-react.git

*Then inside you project import necessary component:*

	import { ButtonColor, ButtonSize, ButtonVariant, Button } from  "alif-ui-kit-react";

*All available components can be viewed in storybook. All available props well documented also there.*
[Alif UI kit React Storybook](https://storybook.alif.tj)  

#### How to contribute?

*Create an issue or choose an already created and assignee to yourself.* 
*Clone the repo. Create meaningful branch for developing.* 
*Keep current style code and follow with current folder structure of the project while developing.
Inside `src/*` folder implement the component from design system. Write tests for the component, referring to previously tests, like in `Button` component. Create a Pull request to main branch, and assign `mkhushang`, with `Odinaev444` to reviewers.*

*In the root first need to run* `npm pkg set scripts.prepare="husky install"`.
*Inside* `test_project/*` *folder you can import your component, then run* `yarn dev` *or* `npm run dev` *to start the project and develop the component.*