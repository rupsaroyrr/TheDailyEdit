# The Daily Edit

A responsive, newspaper-style editorial website with a lead story, categorized news sections, live search and a mobile navigation menu. The project uses demonstration articles in an accessible, traditional print-inspired interface built with vanilla web technologies.

## Features

- Featured lead story and curated headline sections
- Category filters for World, India, Technology, Business, Sports and Entertainment
- Real-time headline search across titles and summaries
- Responsive layouts for desktop, tablet and mobile screens
- Collapsible mobile navigation
- Dynamically generated edition date
- External article links and editorial imagery
- Semantic HTML and accessible navigation labels
- Accessible live search result feedback
- Newspaper-inspired typography and visual styling

## Technologies Used

### Frontend

- **HTML5** - Semantic page structure, article sections, navigation and forms
- **CSS3** - Custom editorial theme, Flexbox, CSS Grid, transitions and responsive media queries
- **Vanilla JavaScript** - DOM rendering, filtering, search, navigation and dynamic content
- **Google Fonts** - Gothic masthead typography through UnifrakturMaguntia
- **Unsplash** - Editorial demonstration images

### Project Setup

- **Node.js and npm** - Dependency and package management
- **Express** - Installed for a future Node.js web server layer
- **MySQL2** - Installed for a future MySQL database integration
- **dotenv** - Installed for environment-based configuration

> The current website is a static frontend: it does not yet require Express, MySQL or dotenv to run. Article content is stored in `js/script.js`.

## How It Works

### Article rendering

Each demonstration article is stored as a JavaScript object containing an ID, title, category, summary, image and source URL. JavaScript creates the featured story, latest headline cards and additional story list from that shared data.

### Category filtering

Each navigation button stores its selected category. `filterArticles()` checks whether an article belongs to the selected category or, when "Home" is selected, whether it belongs to the complete collection.

### Search

Search text and article titles or summaries are normalized to lowercase. The application compares keywords with each article using `indexOf()` and displays only matching results.

### Responsive navigation

The desktop category navigation becomes a menu button on smaller screens. JavaScript toggles the navigation state and updates the button's `aria-expanded` value.

## Getting Started

### Prerequisites

- A modern web browser
- An internet connection for Google Fonts, Unsplash images and external article links
- Node.js and npm are optional unless you want to use the installed package dependencies

### Run the website

1. Clone or download the project.
2. Open the project folder.
3. Open `index.html` directly in a browser.

Alternatively, start any local static server from the project directory, for example:

```bash
npx serve .
```

## Responsive Behavior

- CSS Grid and Flexbox arrange editorial content at larger widths.
- `clamp()` creates fluid headline and masthead sizing.
- Media queries reorganize the layout for smaller viewports.
- Sticky navigation keeps category controls accessible while scrolling.
- Mobile styles convert the navigation into a toggleable menu.

## Accessibility

- Semantic HTML elements describe the page structure.
- Navigation and search controls use descriptive labels.
- Search results are announced through an `aria-live` status message.
- Mobile menu state is exposed through `aria-expanded`.
- External links use `noopener noreferrer` for safe opening in a new tab.
- Decorative images use empty alternative text where appropriate.

## Sample Content Notice

This is an educational demonstration project. The headlines, summaries and article links are used to showcase the user interface and are not presented as verified breaking news. External source links are owned by their respective organizations.

## Future Improvements

- Connect article data to Express API routes
- Store articles in MySQL
- Add environment configuration with dotenv
- Add an article management interface
- Implement pagination and advanced filters
- Add automated tests

## License

This project is configured under the ISC license in `package.json`. Replace or add a repository license if the project will be distributed publicly.
