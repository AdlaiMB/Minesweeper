# Minesweeper Project

This project is a mini game/arcade game website. It includes a list of games (currently only minesweeper) to play and leaderboards for each game. Built with Next.js and tailwindcss.

## Reasons for this Project

### First Reason

During my time as an undergraduate I enjoyed my classes and built some really interesting projects (to myself as a newbie in computer science). I took courses such as CS100 (software construction) that taught us all the steps and tools to use to build software. I unfortunately didn’t translate this knowledge into building my course projects and when reports were required they only came after I had built the project. This led to refactoring and a feeling of missing knowledge or that it was “too easy”. Now that I have completed my undergraduate I have been thinking about all the topics I have learned about and the importance and practicality of each topic.

With this project I wanted to put to use all of the knowledge I gained during my computer science degree. I wanted to fill that feeling of missing knowledge I felt during my undergraduate degree and approach this project like an engineer. I wanted to gain experience planning out a project and designing a system that meets the requirements.

### Second Reason

While completing my undergraduate degree my mind was focusing entirely on classes and obtaining my bachelors. However, I was still interested in learning modern software engineering tools such as react and next.js. I unfortunately was unable to learn these tools to a meaningful degree during my time as an undergrad. I am now a recent graduate and with my “free time” I planned on creating a project with these tools to achieve my goal of learning them.

### Third Reason

Having completed my computer science degree I have begun looking for a job and with no prior internships it has been harder to land an interview. From reading advice online and through prior advice from professors I learned personal projects are a good way to boost my resume. This is another reason for creating this project as well.

## Diagrams

![React Structure Diagram](/diagrams/react_structure.png)

![React State Diagram](/diagrams/state.png)

![State Machine](/diagrams/statemachine.png)

![LocalStorage Structure](/diagrams/localstorageObject.png)

## What I Learned

From this project I learned how to break down the user interface into a component hierarchy. Previous to learning this I would shoot from this hip when deciding what a component would be. Using the more thought out process of breaking down the user interface made it easier to create my components. Another topic related to the structure of components I learned about was pure components. I learned how to manage data in components and how to make updates for components.

One very important topic I learned about during this project is how components rerender. With my little knowledge of React before this project I had understood that calls to update state would rerender the component and its children. However, I imagined this rerendering would rerun all of the code inside each component and therefore reinitialize the state for each child. After looking further into the React docs I learned that initial state is only saved once and ignored on rerenders meaning if a parent rerenders and its children rerender its children will ignore its initial state and preserve the state it had before its parent rerender.

Two other important topics related to React that I learned was identifying where a state should live and determining the minimum state needed. As a newbie to this project I would just place state at the highest point in the component hierarchy and define state for every thing I thought needed to be saved. From reading the docs I have learned state should be placed at the common parent of the components that require that state and that state should only be data that is not passed from parents and that cannot be computed from other state. Knowing this information before I would not have needed to create as many state variables as I did in my previous projects.

Some smaller things I learned throughout the development of this project were link components in next.js, dynamic styles in tailwindcss, and when to use useEffect. I learned link components are the primary way to navigate between routes in next.js. Dynamic styles are not allowed in tailwind css as the styles are generated on demand by scanning through the files, which would make dynamic styles not be visible because they are computed using js template literals. I also learned that useEffect should only be used as a last resort and for connecting to external systems.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
