const navigation = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hernanberisso/",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 256 256"
        {...props}
      >
        <path fill="none" d="M0 0h256v256H0z" />
        <g fill="none">
          <rect width={256} height={256} fill="#fff" rx={60} />
          <rect width={256} height={256} fill="currentColor" rx={60} />
          <path
            fill="#fff"
            d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/htothenan1",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 512 512"
        {...props}
      >
        <path fill="none" d="M0 0h512v512H0z" />
        <path
          fill="currentColor"
          d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
        />
      </svg>
    ),
  },
]

export default function Example() {
  return (
    <footer className="bg-white bottom-0 left-0 w-full">
      <div className="mx-auto max-w-7xl px-6 py-4 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          <p className="text-center text-xs leading-5 text-gray-500 font-quicksand">
            Created by{" "}
            <a
              target="_blank"
              href="https://portfolio-site-htothenan1.vercel.app/"
            >
              Hernan Berisso
            </a>
          </p>{" "}
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-2 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500 font-quicksand">
            &copy;2023 MinWaste, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
