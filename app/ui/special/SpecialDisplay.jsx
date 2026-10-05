import DishCard from  '../../menu/dish/DishCard';
import "./SpecialDisplay.css";
async function SpecialDisplay() {
  const res = await fetch("http://localhost:3000/menu.json");
  const data = await res.json();

  const dishes = data.categories.flatMap((cat) =>
    cat.items.map((item) => ({
      ...item,
      category: cat.category,
    })),
  );
  

  const loading = false;
  const error = null;

  let content;
  if (loading) {
    content = <p>Loading the menu…</p>;
  } else if (error) {
    content = <p className="err">{error}</p>;
  } else if (!dishes.length === 0) {
    content = <p>No dishes yet.</p>;
  } else {
    content = dishes.map((d) =>  d.isSpecial && <DishCard key={d.id} {...d} />);
  }

  return <div className="special-menu">{content}</div>;
}

export default SpecialDisplay;
