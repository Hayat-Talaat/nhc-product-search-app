# NHC Products Catalog

A Next.js application showcasing products catalog with search functionality and detailed product views.

## Live Demo

[View Live Demo](https://nhc-assignment.vercel.app)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **State Management:** React Query
- **HTTP Client:** Axios
- **UI Components:** Custom components with Radix UI
- **Icons:** Lucide Icons
- **Loading UI:** NextJS Toploader
- **Font:** Geist, Abel

## Project Features

- 🔍 Real-time product search
- 📱 Responsive design
- ⚡ Fast page loads with Next.js
- 🖼️ Image optimization
- ⭐ Product ratings display
- 📄 Detailed product views
- 🎨 Modern UI/UX design
- 🚀 Client-side routing

## Folder Structure

```
nhc-assignment/
├── public/
│   ├── logo.png
│   └── logo2.svg
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── products/
│   │   └── layout.tsx
│   ├── components/
│   │   ├── layout/
│   │   └── ui/
│   ├── lib/
│   └── providers/
├── package.json
└── README.md
```

## Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/Hayat-Talaat/nhc-product-search-app
cd nhc-assignment
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Live Domain

[View Deployed App on Vercel](https://nhc-product-search-app.vercel.app)

## ✅ Features

- Search for products by keyword
- View detailed product information
- Dynamic routing to product details
- Responsive design using Tailwind
- Image loading skeletons with shadcn/ui

## Development Notes

- The application uses Next.js App Router for routing
- React Query for server state management
- Tailwind CSS for styling
- Components are organized into layout and UI categories
- Custom hooks for data fetching and state management
- Fully responsive design for all screen sizes

## Building for Production

```bash
npm run build
# or
yarn build
```

Then start the production server:

```bash
npm run start
# or
yarn start
```
