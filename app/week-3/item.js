const Item = ({ name, quantity, category }) => {
  
  return (
    <div class="bg-slate-900 bg-cover max-w-sm p-2 m-4">
      <div class="text-white font-bold text-xl" >{name}</div>
      <div class="text-white text-l">
        buy {quantity} in {category}
      </div>
    </div>
  );
};
export default Item;
