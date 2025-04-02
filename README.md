

## Demo

![GitHub Popular Repos](https://assets.ccbp.in/frontend/content/react-js/github-popular-reposures

- View popular GitHub repositories
- Filter repositories by programming language (All, JavaScript, Ruby, Java, CSS)
- Responsive design for all screen sizes
- Loading state with animated indicator
- Error handling with failure view

## Tech Stack

- React.js
- JavaScript
- CSS
- REST API

## Installation

1. Clone the repository
```bash
git clone https://github.com/chiragSahani/GithubPopularRepos.git
cd githubPopularRepos
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

## Project Structure

The application is built with the following component structure:

- **GithubPopularRepos** - Main container component
- **LanguageFilterItem** - Individual language filter button
- **RepositoryItem** - Card displaying repository details

## API

The application fetches data from:
```
https://apis.ccbp.in/popular-repos?language=ALL
```

Where `language` parameter can be:
- ALL
- JAVASCRIPT
- RUBY
- JAVA
- CSS

## Screenshots

### Success View
![Success View](https://assets.ccbp.in/frontend/content/react-js/github-repos-lg-success-outputure View
![Failure View](https://assets.ccbp.in/frontend/content/react-js/github-repos-error-view-lg-output.ew
![Loading View](https://assets.ccbp.in/frontend/content/react-js/github-repos-lg-loading-output.gn

The application is fully responsive and works well on:
- Mobile devices (< 576px)
- Tablets (≥ 768px)
- Desktops (≥ 992px)
- Large screens (≥ 1200px)

## Implementation Details

- Used React component lifecycle methods for API calls
- Implemented loading, success, and error states
- Applied CSS styling for responsive design
- Used React Loader Spinner for loading animation

## License

This project is licensed under the MIT License.

Citations:
[1] https://pplx-res.cloudinary.com/image/upload/v1743609039/user_uploads/AkjEGpOPxmrcdgq/image.jpg
[2] https://pplx-res.cloudinary.com/image/upload/v1743609042/user_uploads/qIeMiLdZdsjJHTn/image.jpg
[3] https://pplx-res.cloudinary.com/image/upload/v1743609046/user_uploads/yvVfiJFAeDQXHvF/image.jpg

---
