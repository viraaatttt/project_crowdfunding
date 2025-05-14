import { Wallet, Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <Wallet className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">BlockFund</span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              A decentralized crowdfunding platform built on blockchain technology.
              Transparent, secure, and accessible to everyone.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Platform
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/" className="text-base text-gray-600 hover:text-primary-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/campaigns" className="text-base text-gray-600 hover:text-primary-600">
                  Explore Campaigns
                </Link>
              </li>
              <li>
                <Link to="/create" className="text-base text-gray-600 hover:text-primary-600">
                  Start a Campaign
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-base text-gray-600 hover:text-primary-600">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/how-it-works" className="text-base text-gray-600 hover:text-primary-600">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-base text-gray-600 hover:text-primary-600">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-primary-600">
                  Smart Contracts
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-primary-600">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/privacy" className="text-base text-gray-600 hover:text-primary-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-base text-gray-600 hover:text-primary-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-base text-gray-600 hover:text-primary-600">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} BlockFund. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;