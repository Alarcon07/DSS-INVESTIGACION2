import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="bg-purple-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-white">
              INICIO
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md ${isActive('/') 
                ? 'bg-white text-black font-medium' 
                : 'text-white hover:text-gray-900'}`}
            >
              Inicio
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-md ${isActive('/contact') 
                ? 'bg-white text-black font-medium' 
                : 'text-white hover:text-gray-900'}`}
            >
              Contacto
            </Link>
            <Link 
              to="/data" 
              className={`px-3 py-2 rounded-md ${isActive('/data') 
                ? 'bg-white text-black font-medium' 
                : 'text-white hover:text-gray-900'}`}
            >
              Datos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar