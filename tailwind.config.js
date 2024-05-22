/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'card': '5px 5px 0px 0px rgba(0, 0, 0, 1)',
        '3xl': '0 0px 5px 0px rgba(0, 0, 0, 0.25)',
        'circle': '0 7px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'blue': '#2F66F2',
        'black': '#031926',
        'white': '#F6F7FE',
        'blackish': '#27262B'
      },
      borderRadius: {
        'sm' : '10px',
        'md': '20px',
        'lg': '40px'
      },
      fontSize: {
        'base': ['20px', {
          lineHeight: 'normal',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'lg': ['24px', {
          lineHeight: 'normal',
          letterSpacing: '0',
          fontWeight: '700',
        }],
        'button': ['32px', {
          lineHeight: 'normal',
          letterSpacing: '0',
          fontWeight: '700',
        }],
        'xl': ['30px', {
          lineHeight: 'normal',
          letterSpacing: '0',
          fontWeight: '700',
        }],
        '2xl': ['56px', {
          lineHeight: 'normal',
          letterSpacing: '0',
          fontWeight: '800',
        }]
      }
    },
  },
  plugins: [],
};
