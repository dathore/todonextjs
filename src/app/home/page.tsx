import Pagination from './pagination';

async function getData() {
  const res = await fetch(`https://dummyjson.com/todos?limit=150`);
  return res.json();
}

export default async function page() {
  const items = await getData();


  return (
    <>
      <Pagination
        items={items}
      />
    </>
  )
}
