import type { Heading } from "../../types/HomePage/HomePageTypes"
const Header = ({resturantName}:Heading) => {
  return (
    
        <h1 className="text-4xl md:text-6xl font-bold">{resturantName}</h1>
    
  )
}

export default Header;