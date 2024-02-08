

export default function Navbar() {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-black">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen p-4">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/spotify.png" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Spotify Pulse
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="/contact"
              className="text-md  text-white hover:underline"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
