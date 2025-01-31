# Lectures Management System

A modern web application for managing lectures with CRUD operations (Create, Read, Update, Delete). Built with vanilla JavaScript and a RESTful API.

## Features

- 📝 Create new lectures with title and description
- 📚 View all available lectures
- 🔍 Search lectures by ID
- ✏️ Update existing lectures
- 🗑️ Delete lectures
- 💫 Smooth animations and transitions
- 📱 Responsive design

## [Backend](https://github.com/sandovaldavid/api-lectures-management)

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome Icons
- RESTful API

## Project Structure

- 

index.html

 - Main HTML structure
- 

styles.css

 - CSS styling and animations
- 

app.js

 - JavaScript functionality and API interactions

## API Endpoints

The application connects to a local API server at `https://example-api-rest-yy8i.onrender.com/api/lectures` with the following endpoints:

- `GET /api/lectures` - Get all lectures
- `GET /api/lectures/:id` - Get lecture by ID
- `POST /api/lectures` - Create new lecture
- `PUT /api/lectures/:id` - Update lecture
- `DELETE /api/lectures/:id` - Delete lecture

## Setup

1. Clone the repository
2. Make sure your API server is running at `http://localhost:4000`
3. Open 

index.html

 using Live Server

## Usage

- **Add Lecture**: Fill out the "Add New Lecture" form with title and description
- **View Lectures**: All lectures are displayed automatically in the "Available Lectures" section
- **Search**: Use the search form to find lectures by ID
- **Update**: Click the "Edit" button on any lecture to modify its content
- **Delete**: Click the "Delete" button to remove a lecture

## Development

The project uses Visual Studio Code's Live Server extension for development. Install the recommended extensions:

```json
{
  "recommendations": [
    "ritwickdey.liveserver"
  ]
}
```

## Features to Add

- Authentication system
- Lecture categories
- Rich text editor for descriptions
- Image upload support
- Pagination for lectures list

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
