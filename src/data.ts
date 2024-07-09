export interface Question {
    question: string;
    options: string[];
    answer: string;
}

export const data: Question[] = [
    {
        question: "What does JSX stand for in React?",
        options: ["JavaScript XML", "JavaScript Extension", "JavaScript Syntax", "Java XML"],
        answer: "JavaScript XML"
      },
      {
        question: "Which command is used to start a new ReactJS project?",
        options: ["create-react-app", "start-react", "new-react", "init-react"],
        answer: "create-react-app"
      },
      {
        question: "In React, props are __________.",
        options: ["immutable", "mutable", "dynamic", "static"],
        answer: "immutable"
      },
      {
        question: "Which hook is used to fetch data in a functional component in React?",
        options: ["useState", "useEffect", "useFetch", "useData"],
        answer: "useEffect"
      },
      {
        question: "What is the purpose of TypeScript in React development?",
        options: ["To add styling to components", "To provide type checking", "To manage state", "To define component structure"],
        answer: "To provide type checking"
      },
      {
        question: "Which TypeScript keyword is used to define a type alias?",
        options: ["type", "interface", "alias", "typedef"],
        answer: "type"
      },
      {
        question: "Which of the following is NOT a valid TypeScript primitive type?",
        options: ["number", "boolean", "array", "string"],
        answer: "array"
      },
      {
        question: "What is the purpose of the `key` prop in React lists?",
        options: ["To uniquely identify list items", "To style list items", "To provide additional data to list items", "To reorder list items"],
        answer: "To uniquely identify list items"
      },
      {
        question: "What is the significance of the `useState` hook in React?",
        options: ["To manage component's lifecycle", "To fetch data from an API", "To manage state within functional components", "To handle user inputs"],
        answer: "To manage state within functional components"
      },
      {
        question: "Which lifecycle method is invoked immediately after a component is inserted into the DOM?",
        options: ["componentDidMount", "componentWillMount", "componentDidInsert", "componentMounted"],
        answer: "componentDidMount"
      },
      {
        question: "What is the main difference between class components and functional components in React?",
        options: ["Functional components don't support state", "Class components don't support lifecycle methods", "Functional components use hooks to manage state", "Class components use props to pass data"],
        answer: "Functional components use hooks to manage state"
      },
      {
        question: "Which TypeScript feature allows you to combine existing types to create new ones?",
        options: ["Type inference", "Type assertion", "Type union", "Type intersection"],
        answer: "Type union"
      },
      {
        question: "What does the spread operator (...) do in TypeScript?",
        options: ["Concatenates arrays", "Copies properties from one object to another", "Creates a union type", "Throws an error"],
        answer: "Copies properties from one object to another"
      },
      {
        question: "Which React hook is used to run side effects in function components?",
        options: ["useEffect", "useState", "useReducer", "useContext"],
        answer: "useEffect"
      },
      {
        question: "What is the purpose of React Router in a React application?",
        options: ["To manage API requests", "To handle state management", "To navigate between different views", "To manage form submissions"],
        answer: "To navigate between different views"
      },
]