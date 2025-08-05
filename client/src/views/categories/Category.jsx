import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCategory } from "../../api";
import Table from "../../components/Table";
import { Link } from "react-router-dom";

const Category = () => {
  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['category', id],
    queryFn: () => fetchCategory(id)
  });

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <>
      <h2>{data.category.name}</h2>
      <Link to="/items/new">Create New Item</Link>
      <Table items={data.items}></Table>
    </>
  );
}

export default Category;