import { Link } from "react-router-dom"
import { Fragment } from "react";
import { fetchCategories } from "../api";
import { useQuery } from "@tanstack/react-query";

const Sidebar = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories
  });

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <nav id="sidebar">
      <Link to="/items">All</Link> <br/>
      {data.categories.map((category)=> {
        return (
        <Fragment key={category.key}>
          <Link to={`/categories/${category.id}`}>{category.name}</Link> <br/>
        </Fragment>
        );
      })}

      <br/>
      <Link to="/categories/new">New Category</Link>
    </nav>
  )
}

export default Sidebar;