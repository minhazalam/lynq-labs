# Lynq Labs Project Documentation

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Custom Domain](#custom-domain)
- [Editing the Code](#editing-the-code)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This project is a modern web application built with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS.


## Features

- Fast development with Vite
- Type-safe codebase using TypeScript
- Modern UI with React and shadcn-ui components
- Utility-first styling with Tailwind CSS

## Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and media
│   ├── components/         # Reusable UI components
│   │   └── ui/             # UI primitives
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── pages/              # Application pages (About, Contact, Projects, etc.)
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── ...                 # Other source files
├── package.json            # Project metadata and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
└── README.md               # Project documentation
```

## Technologies Used

- **Vite** – Fast build tool and dev server
- **TypeScript** – Type-safe JavaScript
- **React** – UI library
- **shadcn-ui** – Accessible React components
- **Tailwind CSS** – Utility-first CSS framework

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (recommend using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm

### Installation

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
```

### Running the Development Server

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## Deployment

Coming soon..


## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
