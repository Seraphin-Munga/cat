import React from "react";
import Breeds from "../pages/breed/breeds";
import SiteLayout from "../layouts/siteLayout";

const Index = () => {
  return (
    <div>
      <SiteLayout>
        <Breeds />
      </SiteLayout>
    </div>
  );
};

export default Index;
