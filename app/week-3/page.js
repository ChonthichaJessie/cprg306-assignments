import ItemList from "./item-list";

const Page = () => {
  return (
      <main class="bg-slate-950 md:flex flex-col ">
        <h1 class="text-3xl font-bold m-2 text-white">Shopping List</h1>
        <ItemList />
      </main>
  );
};
export default Page;
