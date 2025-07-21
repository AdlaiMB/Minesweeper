import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full py-4 items-center border-b-2 border-white flex px-8 fixed font-[family-name:var(--font-geist-mono)]">
      <div>
        <Link href="/" className="font-bold text-xl">
          Maquinitas
        </Link>
      </div>
      <div className="ml-auto flex gap-6 text-sm">
        <Link href="/games">Games</Link>
        <Link href="/leaderboards">Leaderboards</Link>
      </div>
    </div>
  );
}
