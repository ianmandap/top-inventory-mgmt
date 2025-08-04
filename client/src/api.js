export async function fetchItems() {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}items`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}