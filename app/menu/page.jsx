import CategoryBar from "./catagory/CategoryBar";
export const revalidate = 3600;
import { Suspense } from "react";
// 
import DishCard from "./dish/DishCard";

async function getMenuData() {
  const res = await fetch("http://localhost:3000/menu.json");
  return res.json();
}
export default async function MenuPage({searchParams}) {
  const data = await getMenuData();
  
  const resolvedParams = await searchParams;
  const selected = resolvedParams.category || "All";

  const dishes = data.categories.flatMap((cat) => cat.items.map((item) => ({
    ...item,
    category: cat.category
  })));

  const flteredDishes = selected === "All" ? dishes : dishes.filter((d) => d.category === selected);
  const catagories = data.categories.map((cat) => cat.category);
  return (
    <Suspense fallback={<p>Loading dishes…</p>}>
      <div className="menu">
        {/* <CategoryBar 
      categories={catagories}
      selected={selected}
      onSelect={selected}
      /> */}
        {flteredDishes.map((d) => (
          <DishCard key={d.id} {...d} category={d.category} />
        ))}
      </div>
    </Suspense>
  );
}
