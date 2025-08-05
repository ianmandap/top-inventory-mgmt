import "./styles/pixelweapons.css"

import { useQuery } from '@tanstack/react-query'; 
import { fetchItems } from "./api";
import Table from "./components/Table"

const App = () => {
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
    <div>
      <h1>Items</h1>
      <Table items={data.items}/>
    </div>
  );
};

export default App;
