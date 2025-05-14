import { useState } from "react";
import { useWeb3 } from "../../context/Web3Context";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { Menu, X, Wallet } from "lucide-react";

const Header = () => {
  const { user, connect, disconnect, isConnecting } = useWeb3();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Wallet className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">BlockFund</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link to="/campaigns" className="text-gray-700 hover:text-primary-600 transition-colors">
              Explore
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-primary-600 transition-colors">
              How It Works
            </Link>
            
            {user ? (
              <div className="flex items-center ml-4 space-x-4">
                <Link to="/dashboard">
                  <Button variant="ghost" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <div className="flex flex-col items-end">
                  <span className="text-sm font-medium text-gray-900">
                    {truncateAddress(user.address)}
                  </span>
                  <span className="text-xs text-gray-500">
                    {parseFloat(user.balance).toFixed(4)} ETH
                  </span>
                </div>
                <Button variant="outline" size="sm" onClick={disconnect}>
                  Disconnect
                </Button>
              </div>
            ) : (
              <Button 
                onClick={connect} 
                isLoading={isConnecting}
                disabled={isConnecting}
              >
                Connect Wallet
              </Button>
            )}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/campaigns"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              to="/how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <div className="px-3 py-2">
                  <div className="text-sm font-medium text-gray-900">
                    {truncateAddress(user.address)}
                  </div>
                  <div className="text-xs text-gray-500">
                    {parseFloat(user.balance).toFixed(4)} ETH
                  </div>
                </div>
                <div className="px-3 py-2">
                  <Button variant="outline" size="sm" onClick={disconnect} fullWidth>
                    Disconnect
                  </Button>
                </div>
              </>
            ) : (
              <div className="px-3 py-2">
                <Button 
                  onClick={connect} 
                  isLoading={isConnecting}
                  disabled={isConnecting}
                  fullWidth
                >
                  Connect Wallet
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;