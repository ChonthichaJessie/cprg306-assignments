import Item from "./item";

const GroupedItems = ({ category, items }) => {
  return (
    <div class="bg-slate-900 bg-cover max-w-sm p-2 m-4">
      <div class="text-white font-bold text-xl">{category}</div>
      {/* <div class="text-white font-bold text-xl">{details}</div> */}
      {items.map(({ name, quantity, category }) => {
        return <Item name={name} quantity={quantity} category={category} />;
      })}
    </div>
  );
};
export default GroupedItems;
