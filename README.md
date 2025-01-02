# Random-repo
#Instructions for running this app
#Npm required to run this project
# Node version - v20.18.1

Install React 
1 npm create vite@latest my-random-repo -- --template react 
2 cd my-random-repo
3 npm install
4 npm run dev

Install Tailwind CSS
1 npm install -D tailwindcss postcss autoprefixer
2 npx tailwindcss init -p

3 Edit your tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

4 Add the Tailwind Directives to your CSS in ./src/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

5 npm install react-icons --save

6 Command to start project : npm run dev

projectURL - https://roadmap.sh/projects/github-random-repo
