import Link from "next/link";
import Sale from "./components/Sale";
export default function Home() {
  return (
    <div>
      <header
        className="bg-green-300 text-center font-extrabold text-3xl py-1
        "
      >
        Flower Shop
      </header>
      <div className="flex justify-between px-5 bg-emerald-200">
        <a>Home</a>
        <Link href="/input">Edit</Link>
        <a>phone number: </a>
      </div>
      <div>
        <Sale />
      </div>
    </div>
  );
}
