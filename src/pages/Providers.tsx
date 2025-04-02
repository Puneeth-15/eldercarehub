
import React from "react";
import Layout from "@/components/Layout";
import ProviderList from "@/components/providers/ProviderList";
import { mockCareProviders } from "@/data/mockData";

const Providers: React.FC = () => {
  return (
    <Layout>
      <ProviderList providers={mockCareProviders} />
    </Layout>
  );
};

export default Providers;
