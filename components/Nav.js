import Link from "next/link";
import { useTheme } from "next-themes";

const links = [
  { label: "Page 1", href: "/" },
  { label: "Page 2", href: "/" },
  { label: "Page 3", href: "/" },
];

export default function Nav() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="dark:text-white">
      <ul className="flex flex-wrap sm:justify-between items-start sm:items-center p-8 mt-6 sm:mt-0">
        <li>Hello</li>
        <ul className={`mx-auto sm:mx-0 flex flex-row space-x-5`}>
          {links.map(({ href, label }) => (
            <li className="self-center" key={`${href}${label}`}>
              <Link href={href}>
                <a
                  className={`px-4 py-2 rounded hover:bg-gray-800 dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10`}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
              className="p-2 rounded-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"
            >
              {theme === "dark" ? <span>lite</span> : <span>dark</span>}
            </button>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
