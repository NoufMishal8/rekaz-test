import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  extend: {
    colors: {
      primary: '#CBA446',
      secondary: '#8C735B', 
      background: '#F6F1EB', 
      textDark: '#3D3D3D',
    },
  },
},
  plugins: [],
}

export default config
