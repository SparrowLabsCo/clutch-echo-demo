import EchoWorkflow from "./echo";

const register = () => {
  return {
    developer: {
      name: "Lyft",
      contactUrl: "https://app.slack.com/client/T029A67TC/CQLRKE0ER",
    },
    path: "demos",
    group: "Demo",
    displayName: "Demo",
    routes: {
      echo: {
        path: "echo",
        component: EchoWorkflow,
        displayName: "Echo Workflow",
        description: "Workflow that will echo text back to the user.",
      },
    },
  };
};

export default register;
