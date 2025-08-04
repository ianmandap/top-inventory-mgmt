import "./styles/pixelweapons.css"

import { useQuery } from '@tanstack/react-query'; 
import { fetchItems } from "./api";


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
      
      <table>
        <thead>
          <tr>
            <th>Icon</th>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Updated At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item) => {
            return (
            <tr key={item.id}>
              <td className={item.imageKey} id={item.imageId}></td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item?.category?.name}</td>
              <td>{item.updatedAt.toLocaleString()}</td>
            </tr> )
          })}
        </tbody>
      </table >
    </div>
  );
};

export default App;
