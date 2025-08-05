import { Navigate } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Items from "./views/items/Items";
import Item from "./views/items/Item";
import Categories from "./views/categories/Categories";
import Category from "./views/categories/Category";

const routes = [
  {
    path: "*",
    element: <Navigate to="/404" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/404",
    element: <ErrorPage />
  },
  {
    path: "/",
    element: <Navigate to="/items" />,
  },
  {
    path: "/items",
    element: <Items/>,
    children: [
      { path: ":id", element: <Item/>}
    ]
  },
  {
    path: "/categories",
    element: <Categories />,
    children: [
      { path: ":id", element: <Category/> }
    ]
  }
];

export default routes;
