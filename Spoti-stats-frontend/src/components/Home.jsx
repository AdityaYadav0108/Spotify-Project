export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="flex items-center text-5xl sm:px-16 xl:px-48 font-extrabold dark:text-white">
        Spotify
        <span className="text-white text-2xl font-semibold me-2 px-2.5 py-0.5 rounded bg-black ms-2">
          Pulse
        </span>
      </h1>

      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Welcome to our Spotify Stats website – your personalized hub for
        tracking and exploring your music journey on Spotify! Dive into a world
        of musical insights as we transform your listening habits into
        captivating statistics and engaging visualizations. Discover your top
        genres, most-played tracks, and artists that have become the soundtrack
        to your life. With sleek design and user-friendly navigation, our
        platform invites you to uncover the stories hidden within your
        playlists. Whether you're a casual listener or a devoted music
        enthusiast, elevate your Spotify experience by delving into the
        analytics that bring your music preferences to life. Join us on a
        harmonious journey through your unique musical universe – where numbers
        meet melodies.
      </p>
      <a
        href="https://localhost:3000/login"
        className="inline-flex items-center justify-center sm:mx-16 xl:mx-48 px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
      >
        Get Started
        <svg
          className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
}
