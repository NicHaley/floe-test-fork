import Link from "next/link";
import { Button } from "@floe/ui";
import { useConfig } from "nextra-theme-docs";
import { Footer } from "./components/footer";

const config = {
  darkMode: false,
  nextThemes: {
    defaultTheme: "light",
    forcedTheme: "light",
  },
  docsRepositoryBase: "https://github.com/Floe-dev/floe/tree/main/apps/docs",
  project: {
    link: "https://github.com/Floe-dev/floe",
  },
  footer: {
    component: Footer,
  },
  head: function useHead() {
    const { title } = useConfig();

    return (
      <>
        <meta content="#fff" name="msapplication-TileColor" />
        <meta content="#fff" name="theme-color" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="en" httpEquiv="Content-Language" />
        <meta content="Floe documentation." name="description" />
        <meta content="Floe documentation." name="og:description" />

        <meta content={title ? `${title} – Floe` : "Floe"} name="og:title" />
        <meta content="Floe" name="apple-mobile-web-app-title" />
        <link href="/favicon.ico" rel="icon" type="image/x-icon" />
      </>
    );
  },
  logo: (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 233 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 40H20V80H0V40Z" fill="currentColor" />
      <path d="M30 20H50V60H30V20Z" fill="currentColor" />
      <path d="M10 20H50V30H10V20Z" fill="currentColor" />
      <path d="M30 20H50V60H30V20Z" fill="currentColor" />
      <path d="M10 20H50V30H10V20Z" fill="currentColor" />
      <path d="M60 0H80V40H60V0Z" fill="currentColor" />
      <path d="M20 0H80V10H20V0Z" fill="currentColor" />
      <path
        d="M120.166 61V18.76H147.226V25.1744H127.818V36.6419H145.37V43.0562H127.818V61H120.166Z"
        fill="currentColor"
      />
      <path d="M161.334 18.76V61H153.868V18.76H161.334Z" fill="currentColor" />
      <path
        d="M182.83 61.6188C179.736 61.6188 177.055 60.9381 174.786 59.5769C172.518 58.2156 170.758 56.3112 169.506 53.8638C168.269 51.4163 167.65 48.5562 167.65 45.2837C167.65 42.0112 168.269 39.1444 169.506 36.6831C170.758 34.2219 172.518 32.3106 174.786 30.9494C177.055 29.5881 179.736 28.9075 182.83 28.9075C185.924 28.9075 188.605 29.5881 190.874 30.9494C193.143 32.3106 194.896 34.2219 196.133 36.6831C197.385 39.1444 198.01 42.0112 198.01 45.2837C198.01 48.5562 197.385 51.4163 196.133 53.8638C194.896 56.3112 193.143 58.2156 190.874 59.5769C188.605 60.9381 185.924 61.6188 182.83 61.6188ZM182.871 55.6375C184.549 55.6375 185.951 55.1769 187.079 54.2556C188.206 53.3206 189.045 52.0694 189.595 50.5019C190.159 48.9344 190.441 47.1881 190.441 45.2631C190.441 43.3244 190.159 41.5713 189.595 40.0037C189.045 38.4225 188.206 37.1644 187.079 36.2294C185.951 35.2944 184.549 34.8269 182.871 34.8269C181.153 34.8269 179.723 35.2944 178.581 36.2294C177.454 37.1644 176.608 38.4225 176.045 40.0037C175.495 41.5713 175.22 43.3244 175.22 45.2631C175.22 47.1881 175.495 48.9344 176.045 50.5019C176.608 52.0694 177.454 53.3206 178.581 54.2556C179.723 55.1769 181.153 55.6375 182.871 55.6375Z"
        fill="currentColor"
      />
      <path
        d="M218.372 61.6188C215.196 61.6188 212.453 60.9587 210.143 59.6387C207.847 58.305 206.08 56.4212 204.842 53.9875C203.605 51.54 202.986 48.6594 202.986 45.3456C202.986 42.0869 203.605 39.2269 204.842 36.7656C206.093 34.2906 207.84 32.3656 210.081 30.9906C212.322 29.6019 214.955 28.9075 217.98 28.9075C219.933 28.9075 221.775 29.2237 223.508 29.8562C225.254 30.475 226.794 31.4375 228.128 32.7437C229.475 34.05 230.534 35.7137 231.304 37.735C232.074 39.7425 232.459 42.135 232.459 44.9125V47.2019H206.492V42.1694H225.302C225.288 40.7394 224.979 39.4675 224.374 38.3537C223.769 37.2262 222.923 36.3394 221.837 35.6931C220.765 35.0469 219.513 34.7237 218.083 34.7237C216.557 34.7237 215.217 35.095 214.062 35.8375C212.907 36.5662 212.006 37.5287 211.36 38.725C210.727 39.9075 210.404 41.2069 210.39 42.6231V47.0163C210.39 48.8587 210.727 50.44 211.401 51.76C212.075 53.0662 213.017 54.07 214.227 54.7712C215.437 55.4587 216.853 55.8025 218.475 55.8025C219.562 55.8025 220.545 55.6513 221.425 55.3488C222.305 55.0325 223.068 54.5719 223.714 53.9669C224.36 53.3619 224.848 52.6125 225.178 51.7188L232.15 52.5025C231.71 54.345 230.871 55.9538 229.633 57.3288C228.41 58.69 226.842 59.7488 224.931 60.505C223.02 61.2475 220.833 61.6188 218.372 61.6188Z"
        fill="currentColor"
      />
    </svg>
  ),
  navbar: {
    extraContent: (
      <Link
        className="flex items-center gap-x-1"
        href="https://cal.com/nic-haley/book-a-demo"
        target="_blank"
      >
        <Button size="md">Book a demo</Button>
      </Link>
    ),
  },
  primaryHue: 38,
  primarySaturation: 92,
  search: {
    placeholder: "Search...",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Floe",
    };
  },
};

export default config;
