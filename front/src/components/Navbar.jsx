import React from "react";

function Navbar() {
  const menuItems = [
    "Dashboard",
    "Earn",
    "Grow",
    "Swap",
    "Vesting",
  ];
  const listItems = menuItems.map((item) => 
    <li>{item}</li>
  );

  return (

    <nav>
      <div className="logo">logo</div>
      <ul>{listItems}</ul>
    </nav>
  )
}

export default Navbar;