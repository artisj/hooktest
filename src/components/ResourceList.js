import React from "react";

import useResources from "./useResource";

/*
class ResourceList extends React.Component {

  state = {resources: []};
  async componentDidMount() {
    const response =  await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
    this.setState({ resources: response.data });
  }

  render(props) {
    return <div>{this.state.resources.length}</div>;
  }
}
*/

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
