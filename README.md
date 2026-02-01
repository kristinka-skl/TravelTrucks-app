# TravelTrucks 🚐

**TravelTrucks** is a web application designed for renting campers. The platform allows users to browse a catalog of available vehicles, filter them by various criteria, view detailed information including reviews and specifications, and book their preferred camper for their travels.

![Project Banner](./public/TravelTrucks.webp)

## 🚀 Live Demo

[Visit website](https://travel-trucks-app-eight.vercel.app/)

## 📋 Features

- **Home Page:** Attractive banner with a call-to-action to explore the catalog.
- **Catalog:** Display a list of campers with essential details.
  - **Server-side filtering** by location, body type, and equipment (AC, kitchen, TV, etc.).
  - "Load More" functionality for pagination.
- **Camper Details:** Comprehensive description, photo gallery, and vehicle specifications.
  - User reviews section.
  - Booking form with validation.
- **Favorites:** Ability to add/remove campers to a favorites list (persisted in local storage).

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **HTTP Client:** [Axios](https://axios-http.com/), [TanStack Query](https://tanstack.com/)
- **Forms & Validation:** [Formik](https://formik.org/) + [Yup](https://github.com/jquense/yup)
- **Notifications:** [React Hot Toast](https://react-hot-toast.com/)
- **Styling:** CSS Modules / Vanilla CSS
- **Backend:** [MockAPI](https://mockapi.io/)

## ⚙️ Installation & Running

Follow these steps to set up the project locally:

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/kristinka-skl/travel-trucks.git](https://github.com/kristinka-skl/travel-trucks.git)
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd travel-trucks
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Author

**Khrystyana Skliarchuk** Junior Frontend Developer

- Email: [kristinka.skl@gmail.com](mailto:kristinka.skl@gmail.com)
- GitHub: [Go to Profile](https://github.com/kristinka-skl)
