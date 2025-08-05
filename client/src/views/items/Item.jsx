import { fetchItem } from "../../api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Table from "../../components/Table";

const Item = () => {
  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['item', id],
    queryFn: () => fetchItem(id)
  });

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <>
      <h2>{data.item.name}</h2>
      <Table items={[data.item]} />
    </>
  );
}

export default Item;