import React from "react";
import Layout from "../../components/layout";
import TopContainer from "../../containers/top";
import Tools from "../../containers/tools";

function Main() {
  return (
    <Layout>
      <TopContainer />
      <Tools />
    </Layout>
  );
}

export default React.memo(Main);
