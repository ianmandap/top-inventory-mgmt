import { Link } from "react-router-dom";

function Table({items}) {
  return (
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
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td className={item.imageKey} id={item.imageId}></td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item?.category?.name}</td>
              <td>{item.updatedAt.toLocaleString()}</td>
              <td>
                <Link to={`/items/${item.id}/`}>View</Link>
              </td>
            </tr>)
        })}
      </tbody>
    </table >
  );
};

export default Table;