import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Light mode colors
    "bg-blue-100", "text-blue-600", "border-blue-200",
    "bg-blue-500", "bg-blue-600", "text-blue-500", "border-blue-500",
    "bg-green-100", "text-green-600", "border-green-200",
    "bg-green-600", "border-green-600",
    "bg-gray-100", "text-gray-600", "border-gray-200",
    "bg-gray-600", "border-gray-600",
    "bg-yellow-100", "text-yellow-600", "border-yellow-200",
    "bg-yellow-500", "border-yellow-500",
    "bg-purple-100", "text-purple-600", "border-purple-200",
    "bg-purple-600", "border-purple-600",
    
    // Dark mode colors
    "dark:bg-blue-900/30", "dark:text-blue-400", "dark:border-blue-800/50",
    "dark:bg-blue-500", "dark:border-blue-500", "dark:text-blue-300",
    "dark:bg-green-900/30", "dark:text-green-400", "dark:border-green-800/50",
    "dark:bg-green-500", "dark:border-green-500",
    "dark:bg-gray-800/30", "dark:text-gray-400", "dark:border-gray-700/50",
    "dark:bg-gray-500", "dark:border-gray-500",
    "dark:bg-yellow-900/30", "dark:text-yellow-300", "dark:border-yellow-800/50",
    "dark:bg-yellow-400", "dark:border-yellow-400",
    "dark:bg-purple-900/30", "dark:text-purple-400", "dark:border-purple-800/50",
    "dark:bg-purple-500", "dark:border-purple-500",
  ],
  theme: {
  	extend: {
  		colors: {
			primary: 'rgb(0,53,119)',        // #004766
			secondary: ' rgb(2,193,200)',     // #0077b3
			earthLight: 'rgb(163, 217, 165)',   // #1e7d32
			earth: 'rgb(72, 161, 77)',
			text: 'rgb(240, 240, 240)',        // #f0f0f0

			darkPrimary: 'rgb(0, 51, 77)',     // Darker shade of primary color
			darkSecondary: 'rgb(0, 91, 153)',  // Darker shade of secondary color
			darkAccentGreen: 'rgb(15, 85, 38)', // Darker accent green
			darkText: 'rgb(220, 220, 220)',    // Lighter text color for dark mode
    
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
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			}
  		},
  		animation: {
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
  		}
  	}
  },
  plugins: [
		require("tailwindcss-animate"),
		addVariablesForColors,
	],
} satisfies Config;

/**
 * 
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
 * 
 */
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}