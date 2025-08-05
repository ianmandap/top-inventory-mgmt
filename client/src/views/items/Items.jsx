import Layout from "../../layouts/layout";
import Table from "../../components/Table";
import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../api";
import { Link, useOutlet } from "react-router-dom";

const Items = () => {
  const outletContent = useOutlet();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['items'],
    queryFn: fetchItems
  });

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <Layout>
      <h1>All Items</h1>
      <Link to="/items/new">Create New Item</Link>
      {outletContent ||  <Table items={data.items} />}
    </Layout>
  );
};

export default Items;