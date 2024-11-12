/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondo-pantalla': "url('fondo_pantalla.jpg')",
      }
    },   
    screens: {
      'md': '769px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px', // ajuste si es necesario
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },

    fontFamily:{
      font:[ "Dancing Script", "cursive"]
    },
    
    keyframes: {
      zoomOut: {
        '0%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(1.2)' },
      },
    },
    animation: {
      zoomOut: 'zoomOut 0.5s ease forwards',
    }
  },
  plugins: [],
}

