import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav>
      <Link href="/about">
        <b>About</b>
      </Link>{" "}
      <br />
      <Link href="/about/us">
        <b>About Us</b>
      </Link>{" "}
      <br />
      <Link href="/about/someone">
        <b>About Someone</b>
      </Link>{" "}
      <br />
      <Link href="/listsofposts">
        <b>List Of Posts</b>
      </Link>
      <br />
    </nav>
  );
}

export default Navbar;
