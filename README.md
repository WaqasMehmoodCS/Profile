# Personal Portfolio Website

This repository contains the source code for my personal portfolio website built with Next.js. The website showcases my projects, resume, contact information, and more.

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository to your local machine:

   git@github.com:WaqasMehmoodCS/Profile.git

2. Navigate into the project directory:

   cd personal-portfolio

3. Install dependencies:

   npm install

4. Create a `.env` file in the root directory and add the necessary environment variables:

   MONGO=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database-name
   DOMAIN=http://localhost:3000

5. Run the development server:

   npm run dev

6. Open http://localhost:3000 in your browser to view the website.

## Features

- **Project Showcase**: Display your projects with descriptions, images, and links.
- **Resume Page**: Showcase your resume or CV for potential employers.
- **Contact Form**: Allow visitors to contact you through a form.
- **Image Slider**: Implement an image slider to showcase images with navigation buttons.
- **Responsive Design**: Ensure the website looks great on all devices, including mobile and desktop.
- **SEO Optimization**: Optimize the website for search engines to improve visibility.
- **Dark Mode**: Implement a dark mode option for users who prefer darker themes.
- **Animations**: Add subtle animations to enhance user experience.
- **Serverless Functions**: Use serverless functions for dynamic functionality, such as form submission and email notifications.

## Technologies Used

- Next.js
- React
- MongoDB (for backend data storage)
- Tailwind CSS (for styling)
- Axios (for HTTP requests)
- Formik and Yup (for form handling and validation)

## Folder Structure

personal-portfolio/
├── components/ # Reusable components
├── src/ # Source files
│ ├── api/ # API routes
│ ├── portfolio/ # Portfolio-related components and pages
│ ├── resume/ # Resume-related components and pages
│ ├── contact/ # Contact-related components and pages
│ └── ...
└── ...

## Deployment

The website can be deployed to Vercel for hosting. Ensure that you have set up the necessary environment variables in your Vercel project settings.

To deploy:

1. Install the Vercel CLI:

   npm install -g vercel

2. Run the deployment command:

   vercel

You can access the live version [here](https://profile-waqas.vercel.app/).

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository's `main` branch.

## Author

- [Waqas Mehmood](https://github.com/WaqasMehmoodCS) -->

Feel free to customize the features section further or add any additional information you think is relevant!
