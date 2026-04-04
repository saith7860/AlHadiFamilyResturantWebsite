import { Link } from "react-router"
import Header from "../components/Home/Header"

const Home = () => {
  return (
    <>
    <div className="relative w-full h-screen">
      
      {/* Background Image */}
      <img
        src="/backHome.jpg" // put your image in public folder
        alt="Restaurant"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>
   
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        
        {/* Restaurant Name */}
        <Header resturantName="AL Hadi Family Restaurant"/>

        {/* Steps */}
        <p className="text-lg md:text-xl mb-6 max-w-xl mt-4">
          Click on <span className="font-bold text-2xl">Start Order</span> → Select your <span className="font-bold text-2xl">Menu</span> → 
          Place order on <span className="font-bold text-2xl">WhatsApp</span>
        </p>

        {/* Button */}
        <Link to='/menupage'>
        <button
        
          className="bg-cta hover:bg-cta-hover text-blacktext font-semibold px-6 py-3 rounded-lg transition"
        >
          Start Order
        </button>
   </Link>
      </div>
    </div>
    </>
  )
}

export default Home;