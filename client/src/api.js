export async function fetchItems() {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}items`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function fetchItem(id) {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}items/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function fetchCategories() {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}categories`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function fetchCategory(id) {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}categories/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}