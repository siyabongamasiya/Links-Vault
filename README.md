# Links Vault

A React-based web application that stores, manages, and filters links. Users can search links in and view results dynamically.

## Features
- Search functionality with live filtering
- Organized layout with **TopSection**, **MidSection**, and **Footer**
- Reusable component-based architecture
- Data Access Object (DAO) for centralized data handling
- String matcher utility for flexible search queries

## Project Structure
src/
 ├── components/
 │    ├── button.tsx
 │    ├── dialogue.tsx
 │    ├── floatingButton.tsx
 │    ├── footer.tsx
 │    ├── input.tsx
 │    ├── itemButton.tsx
 │    ├── leftMidSection.tsx
 │    ├── listItem.tsx
 │    ├── midSection.tsx
 │    ├── modal.tsx
 │    ├── rightMidSection.tsx
 │    ├── search.tsx
 │    ├── tag.tsx
 │    └── topSection.tsx
 ├── models/
 │    └── link.ts
 ├── Utils/
 │    ├── dao.ts
 │    └── stringMatcher.ts
 ├── App.tsx
 ├── App.css
 └── main.tsx

## Tech Stack
- **React 19** – Frontend framework
- **TypeScript** – Type-safe development
- **Vite** – Fast build tool
- **React Icons** – Icon library
- **ESLint + TypeScript ESLint** – Code linting
- **CSS** – Styling

## Dependencies
"react": "^19.1.1",  
"react-dom": "^19.1.1",  
"react-icons": "^5.5.0"

## Dev Dependencies
"@eslint/js": "^9.33.0",  
"@types/react": "^19.1.10",  
"@types/react-dom": "^19.1.7",  
"@vitejs/plugin-react": "^5.0.0",  
"eslint": "^9.33.0",  
"eslint-plugin-react-hooks": "^5.2.0",  
"eslint-plugin-react-refresh": "^0.4.20",  
"globals": "^16.3.0",  
"typescript": "~5.8.3",  
"typescript-eslint": "^8.39.1",  
"vite": "^7.1.2"

## Getting Started

### 1. Clone the Repository
git clone <your-repo-url>  
cd links-vault

### 2. Install Dependencies
npm install

### 3. Run in Development
npm run dev

### 4. Build for Production
npm run build

### 5. Preview Build
npm run preview

## Notes
- The `DataAccessObject (dao)` manages links centrally.  
- `stringMatcher` helps match link IDs against the search input.  
- Initial links load on mount using `useEffect`.
