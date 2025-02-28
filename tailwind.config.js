/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		transitionProperty: {
  			height: 'height'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		boxShadow: {
  			card: '5px 5px 0px 0px rgba(0, 0, 0, 1)',
  			'3xl': '0 0px 5px 0px rgba(0, 0, 0, 0.25)',
  			circle: '0 7px 4px 0px rgba(0, 0, 0, 0.25)'
  		},
  		colors: {
  			blue: '#3a69e9',
  			black: '#031926',
  			white: '#F6F7FE',
  			blackish: '#27262B',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			sm: 'calc(var(--radius) - 4px)',
  			md: 'calc(var(--radius) - 2px)',
  			lg: 'var(--radius)'
  		},
  		fontSize: {
  			mobilefine: [
  				'9px',
  				{
  					lineHeight: 'normal',
  					letterSpacing: '0',
  					fontWeight: '400'
  				}
  			],
  			fine: [
  				'16px',
  				{
  					lineHeight: 'normal',
  					letterSpacing: '0',
  					fontWeight: '400'
  				}
  			],
  			base: [
  				'20px',
  				{
  					lineHeight: 'normal',
  					letterSpacing: '0',
  					fontWeight: '400'
  				}
  			],
  			lg: [
  				'24px',
  				{
  					lineHeight: 'normal',
  					letterSpacing: '0',
  					fontWeight: '700'
  				}
  			],
  			button: [
  				'32px',
  				{
  					lineHeight: 'normal',
  					letterSpacing: '0',
  					fontWeight: '700'
  				}
  			],
  			mobilebutton: [
  				'15px',
  				{
  					lineHeight: 'normal',
  					letterSpacing: '0',
  					fontWeight: '700'
  				}
  			],
  			xl: [
  				'24px',
  				{
  					lineHeight: 'normal',
  					letterSpacing: '0',
  					fontWeight: '700'
  				}
  			],
  			'2xl': [
  				'36px',
  				{
  					lineHeight: 'normal',
  					letterSpacing: '0',
  					fontWeight: '800'
  				}
  			],
  			mobile2xl: [
  				'40px',
  				{
  					lineHeight: 'normal',
  					letterSpacing: '0',
  					fontWeight: '800'
  				}
  			],
  			mobilexl: [
  				'12px',
  				{
  					lineHeight: 'normal',
  					letterSpacing: '0',
  					fontWeight: '800'
  				}
  			],
  			mobilebase: [
  				'11',
  				{
  					lineHeight: 'normal',
  					letterSpacing: '0',
  					fontWeight: '500'
  				}
  			]
  		},
  		keyframes: {
  			fadein: {
  				'0%': {
  					opacity: 0
  				},
  				'100%': {
  					opacity: 1
  				}
  			},
  			floating: {
  				'0%': {
  					transform: 'translate(0,0)'
  				},
  				'25%': {
  					transform: 'translate(-25px,0px)'
  				},
  				'50%': {
  					transform: 'translate(0,-0)'
  				},
  				'75%': {
  					transform: 'translate(25px, 0px)'
  				},
  				'100%': {
  					transform: 'translate(-0,0)'
  				}
  			},
  			floating2: {
  				'0%': {
  					transform: 'translate(0,0)'
  				},
  				'25%': {
  					transform: 'translate(-30px,20px)'
  				},
  				'50%': {
  					transform: 'translate(0,-0)'
  				},
  				'75%': {
  					transform: 'translate(30px,-20px)'
  				},
  				'100%': {
  					transform: 'translate(-0,0)'
  				}
  			},
  			floating3: {
  				'0%': {
  					transform: 'translate(0,0)'
  				},
  				'25%': {
  					transform: 'translate(30px,25px)'
  				},
  				'50%': {
  					transform: 'translate(0,0)'
  				},
  				'75%': {
  					transform: 'translate(-30px,-25px)'
  				},
  				'100%': {
  					transform: 'translate(-0,0)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			floating: 'floating 10s linear infinite',
  			floating2: 'floating2 7s linear infinite',
  			floating3: 'floating3 6s linear infinite',
  			fadein: 'fadein 2s ease-in forwards',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
