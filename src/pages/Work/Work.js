import React from "react";
import { InfoSection, Posts } from "../../components";
import { homeObjOne, homeObjTwo } from "./Data";
import { client } from "../../client";

class Work extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        this.setState({
          articles: response.items,
        });
      })
      .catch(console.error);
  }
  render() {
    return (
      <>
        <InfoSection {...homeObjOne} />
        {/* <InfoSection {...homeObjTwo} /> */}
        <Posts posts={this.state.articles} />
      </>
    );
  }
}

export default Work;
