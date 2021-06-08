import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/"><a>Home</a></Link>
      <Link href="/users"><a>Users</a></Link>

      <Link href="/"><a>test</a></Link>
      <Link href="/"><a>test</a></Link>
    </nav>
  );
}

export default Navbar;
