/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: ['outline-none'],
  theme: {
    // 'tablet': '640px',
    // => @media (min-width: 640px) { ... }

    // 'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }

    // 'desktop': '1280px',
    extend: {
      backgroundImage: {
        'main-background': "url('/bg_cover.svg')",
        'side-cloud': "url('/clouds.svg')",
        'button-cloud': "url('/cloud_button.svg')",
        'hero-background': "url('/bg_hero_main_cover.svg')",
        'searchbar-background': "url('/searchbar.svg')",
      },
      maxWidth: {
        '8xl': '1920px',
      },
      colors: {
        store: {
          'p-light': 'var(--store-primary-light)',
          's-light': 'var(--store-secondary-light)',

          'p-dark': 'var(--store-primary-dark)',
          's-dark': 'var(--store-secondary-dark)',

          'a-green': 'var(--store-alt-green)',
          'a-red': 'var(--store-alt-red)',
          'a-blue': 'var(--store-alt-blue)',

          'aborder-blue': 'var(--store-alt-border-blue)',
          'aborder-purple': 'var(--store-alt-border-purple)',
          'aborder-pink': 'var(--store-alt-border-pink)',
          'aborder-yellow': 'var(--store-alt-border-yellow)',

          'abutton-blue': 'var(--store-alt-button-blue)',
        },
        primary: 'var(--primary)',
        'primary-2': 'var(--primary-2)',
        secondary: 'var(--secondary)',
        'secondary-2': 'var(--secondary-2)',
        hover: 'var(--hover)',
        'hover-1': 'var(--hover-1)',
        'hover-2': 'var(--hover-2)',
        'accent-0': 'var(--accent-0)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3)',
        'accent-4': 'var(--accent-4)',
        'accent-5': 'var(--accent-5)',
        'accent-6': 'var(--accent-6)',
        'accent-7': 'var(--accent-7)',
        'accent-8': 'var(--accent-8)',
        'accent-9': 'var(--accent-9)',
        violet: 'var(--violet)',
        'violet-light': 'var(--violet-light)',
        'violet-dark': 'var(--violet-dark)',
        pink: 'var(--pink)',
        'pink-light': 'var(--pink-light)',
        cyan: 'var(--cyan)',
        blue: 'var(--blue)',
        green: 'var(--green)',
        red: 'var(--red)',
      },
      textColor: {
        base: 'var(--text-base)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      boxShadow: {
        'outline-normal': '0 0 0 2px var(--accent-2)',
        magical:
          'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
      },
      lineHeight: {
        'extra-loose': '2.2',
      },
      scale: {
        120: '1.2',
      },
      fontFamily: {
        rockoflf: ['RockoFLF, sans-serif'],
        kiddos: ['Kiddos, sans-serif'],
      },
    },
  },
}
