# Tour Page - Full Stack Development Project

## Project Overview

Welcome to the Tour Page project! I'm Bartu Çakır, and this project is part of my journey to enhance my skills in full stack development. Utilizing technologies like React, Redux, React Router v6, TypeScript, RSuite, Framer Motion, SCSS, Node.js, Express, and MongoDB, I've crafted an interactive and dynamic tour experience.

## Built With

- React
- Redux
- React Router v6
- TypeScript
- RSuite
- Framer Motion
- SCSS
- Node.js
- Express
- MongoDB
- Redux Toolkit Query

## Demo

Explore the live demo [here](https://bartutourproject.netlify.app).

## Project Description

In this project, I've concentrated on refining my full stack development skills. The use of cutting-edge technologies allows for a seamless and engaging user experience. From user login to reservation and payment processes, this project encapsulates various features to simulate a real-world tour page.

## Project Features

### User Authentication

- Implemented secure user authentication and authorization using Node.js, Express, and MongoDB.
- Users can register, log in, and log out securely.

### Detailed Tour Page

- Created a dedicated page displaying comprehensive tour information, including descriptions, dates, prices, and captivating images.

### Reservation and Payment Process

- Users can select a tour, make reservations, and complete the payment process, with all data stored in the MongoDB database.
- Reservation and payment records can be viewed and deleted from the user profile.

### Filtering

- Integrated options to filter the tour list based on criteria such as price and city, providing users with a tailored browsing experience.
- When filtering is applied, the filtered value is added to the page's URL using `searchParams`, and upon reopening the page with that URL, the filtering is re-applied.

### Search Functionality

- Implemented a search bar at the top right, allowing users to easily search for tours.
- Tours are dynamically filtered based on the letters entered, with matching results displayed below the search bar.

### Bookmarking

- Users can enjoy a personalized experience by bookmarking tours after logging in.
- Favorite tours are stored in the backend, providing a persistent user experience.

### Backend Integration

- **Node.js, Express, MongoDB API:** Implemented a robust backend to handle data storage and retrieval.
- **Redux Toolkit Query:** Used for efficient state management and data fetching.
- **Custom Error Handling:** Implemented to enhance user experience and debugging.

## Profile Management

- Users can view and delete their reservations and payments from their profile.
- Favorite tours are connected to the backend, providing a persistent user experience.

## Installation

1. Clone the repo:
    ```sh
    git clone https://github.com/your-username/tour-page.git
    ```
2. Install NPM packages:
    ```sh
    npm install
    ```
3. Create a `.env` file in the root directory and add the following:
    ```env
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

## Usage

1. Run the development server:
    ```sh
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Bartu Çakır - [LinkedIn](https://linkedin.com/in/bartwocakir) - [Email](mailto:bartucakir21@gmail.com)

Project Link: [https://github.com/your-username/tour-page](https://github.com/your-username/tour-page)
