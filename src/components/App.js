import React, { useState } from "react";
import UserList from "./UserList";
import ResourceList from "./ResourceList";
/*
class App extends React.Component {

  state = {resource: 'posts'};
  render() {
    return <div>
      <div>
        <button onClick={() => this.setState({ resource: "posts"})}>Posts</button>
        <button onClick={() => this.setState({ resource: "todos"})}>Todos</button>
      </div>
      {this.state.resource}
      </div>;
  }
}
*/

// component using useState hook

const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
        <button onClick={() => setResource("users")}>Users</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
