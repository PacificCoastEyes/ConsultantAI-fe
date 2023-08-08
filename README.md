# Consultant.AI Post-Interview Application (React Front-End)

**Note: This is the front-end repo. For the back-end repo, please visit [https://github.com/PacificCoastEyes/consultantai-be](https://github.com/PacificCoastEyes/consultantai-be).**

## Deployed Address

[https://victorious-glacier-0c8d1f803.3.azurestaticapps.net/](https://victorious-glacier-0c8d1f803.3.azurestaticapps.net/)

## About the App

### Purpose

This app is the user-facing frontend of the application. It consists of a homepage, login and signup pages, a dashboard-style landing page after login, and a logout function.

The app stores users' JWT authentication tokens in localStorage, and attempts to restore the user's logged in status upon app reload/refresh after first checking with the backend that their token is still valid. A private route component prevents logged out users from visiting the Dashboard page and prevents logged in users from visiting the signup and login pages (redirecting them to the Dashboard page instead).

### Languages, Tools, and Frameworks

The app's UI is built with TypeScript-based React, bootstrapped with Create React App. The fully mobile-responsive design is based on customized Material UI, with minimal CSS where required. API calls are made with Axios. The app is hosted with Microsoft Azure Static Web Apps.
