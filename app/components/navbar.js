import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-white">
            Home
          </a>
        </li>
        <li>
          <Link href="/pages/aboutus.js" className="text-white">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/pages/whyadopt.js" className="text-white">
            Why Adopt
          </Link>
        </li>
        <li>
          <Link href="/pages/signup.js" className="text-white">
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
