# Pokedex Website

This is a **Pokedex website** built using **Next.js**, **Axios**, **Material UI**, and **@emotion** for styling. The data is fetched from the [PokeAPI](https://pokeapi.co/docs/v2#resource-listspagination-section), allowing users to browse and explore various Pokémon details.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Source](#api-source)
- [Project Structure](#project-structure)

## Demo

Check out the live demo of the application:  
[Pokedex Website](https://pokedex-website-two.vercel.app/en)

## Features

- Browse a list of Pokémon with pagination
- View detailed information about each Pokémon

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation
- [Axios](https://axios-http.com/) - Promise-based HTTP client for API requests
- [Material UI](https://mui.com/) - UI library for responsive and accessible components
- [@emotion/styled](https://emotion.sh/docs/styled) - CSS-in-JS library used for custom component styling

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

```bash
 git clone https://github.com/your-username/pokedex-website.git
```

2. Navigate to the project folder:

```bash
 cd pokedex-website
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and go to http://localhost:3000.

## Usage

- Use the navigation buttons to paginate through the list of Pokémon.
- Click on a Pokémon to view detailed information, including stats, abilities, and types.

## API Source

This project uses data from the [PokeAPI](https://pokeapi.co/docs/v2#resource-listspagination-section).
PokeAPI is a free and open API that provides extensive data about Pokémon, including species, abilities, and more.

## Key API Endpoints:

- GET /pokemon?limit=20&offset=0 - Fetches a paginated list of Pokémon.
- GET /pokemon/{id or name} - Fetches detailed data for a specific Pokémon

## Project Structure

```bash
pokedex-website/
├── components/        # Reusable UI components (PokemonCard, Pagination, etc.)
├── features/          # Next.js pages (Home, PokemonDetails)
├── type/              # Global and api types
├── utils/             # Helper functions for API requests and data handling
├── public/            # Static assets (images, icons, etc.)
└── package.json       # Project metadata and dependencies
```
