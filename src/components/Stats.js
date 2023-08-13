function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  const numOfItems = items.length;
  const numOfPackedItems = items.filter((item) => item.packed).length;
  const percentage = (numOfPackedItems / numOfItems) * 100;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'You got everything! Ready to go ✈️'
          : `You have ${numOfItems} items on your list, and you already packed ${numOfPackedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
export default Stats;
