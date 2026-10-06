
export const revalidate = 3600;
import { Suspense } from "react";
import fs from "fs/promises";
import path from "path";
import FilterShell from "../menu/dish/FilterShell";

async function getMenuData() {
  const filePath = path.join(process.cwd(), "public", "menu.json");
  const fileContents = await fs.readFile(filePath, "utf-8");
  return JSON.parse(fileContents);
}
export default async function MenuPage() {
  const data = await getMenuData();
  
  const dishes = data.categories.flatMap((cat) => cat.items.map((item) => ({
    ...item,
    category: cat.category
  })));

  return (
    <Suspense fallback={<p>Loading dishes…</p>}>
      <div>
      <FilterShell dishes={dishes} />;
      </div>
    </Suspense>
  );
}
