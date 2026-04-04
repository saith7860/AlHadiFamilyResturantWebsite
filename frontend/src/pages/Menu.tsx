
import { useState } from 'react';
import SearchBar from '../components/Menu/SearchBar';
import menu from '../Data/menu.json';
import MenuBar from '../components/Menu/MenuBar';
const Menu = () => {
 
const [selectedCategory, setSelectedCategory] = useState("Appetizer");
const activeCategory = menu.categories.find(
  (cat) => cat.name === selectedCategory
);
  return (
    <section className=''>
        {/* FOOD SELECTION TEXT */}
        <h1 className='flex justify-center text-2xl font-bold pt-4'>Select Food</h1>
        {/* SEARCH FOOD */}
        <SearchBar/>
   <div className="flex pt-6 gap-3 overflow-x-auto whitespace-nowrap">
      {menu.categories.map((item) => (
    <MenuBar key={item.name} label={item.name} isActive={selectedCategory === item.name}
      onClick={() => setSelectedCategory(item.name)} />
      ))}
  
   </div>
   {/* ACTUAL MENU ITEMS */}
   <div>
  {activeCategory?.items.map((item) => (
    <div key={item.name} className="mb-4 border-b pb-2">
      
      {/* Item Name */}
      <h3 className="font-semibold">{item.name}</h3>

      {/* Prices */}
      <div className="flex gap-3 flex-wrap mt-1">
        {Object.entries(item)
          .filter(([key]) => key !== "name") // remove name
          .map(([key, value]) => (
            <span
              key={key}
              className="text-sm bg-gray-100 px-2 py-1 rounded"
            >
              {key}: Rs {value}
            </span>
          ))}
      </div>

    </div>
  ))}
</div>
   {/* <div>
  {activeCategory?.items.map((item) => (
    <div key={item.name}>
      <h3>{item.name}</h3>
    </div>
  ))}
</div> */}
    </section>
  )
}

export default Menu;