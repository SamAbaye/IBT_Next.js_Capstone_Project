import React from 'react'
import DishCard from './DishCard';

type Dish = {
  id: string;
  nameEn: string;
  nameAm?: string;
  priceETB: number;
  spiceLevel?: string;
  isFasting?: boolean;
  isSpecial?: boolean;
};

type Category = {
  category: string;
  items: Dish[];
};

type MenuData = {
  categories: Category[];
};
async function DishList() {
  const res = await fetch("http://localhost:3000/menu.json");
  const data: MenuData = await res.json();

  const dishes = data.categories.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.category })),
  );

  return (
    <div className="menu">
      {dishes.map((d) => (
        <DishCard key={d.id} {...d} category={d.category} />
      ))}
    </div>
  );
}

export default DishList