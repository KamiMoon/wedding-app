import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/users">
          <a>Users List</a>
        </Link>{" "}
        |{" "}
        <Link href="/wedding/guests">
          <a>Guest List</a>
        </Link>{" "}
      </nav>
    </header>
  );
}
