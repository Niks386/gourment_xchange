# Gourmet Xchange

A modern web application built with Tailwind CSS.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Build CSS for production (minified):
```bash
npm run build
```

Or build CSS for development:
```bash
npm run build-css
```

Or watch for changes and automatically rebuild:
```bash
npm run watch-css
```

## Project Structure

```
gourmet-Xchange/
├── assets/
│   ├── css/
│   │   ├── style.css     # Source CSS with Tailwind directives
│   │   ├── loader.css    # Loader component styles
│   │   └── output.css    # Compiled Tailwind CSS
│   ├── js/
│   │   └── main.js       # Main JavaScript file
│   └── images/           # Image assets
├── index.html            # Main HTML file
├── loader.html           # Loader demo page
├── tailwind.config.js    # Tailwind configuration
└── package.json          # NPM dependencies
```

## Usage

Include the compiled CSS and JS in your HTML files:
```html
<link href="./assets/css/output.css" rel="stylesheet">
<link href="./assets/css/loader.css" rel="stylesheet">
<script src="./assets/js/main.js"></script>
```

## Development

Run the watch script to automatically rebuild CSS on changes:
```bash
npm run watch-css
```

## NPM Scripts

- `npm run build` - Build CSS for production (minified)
- `npm run build-css` - Build CSS for development
- `npm run watch-css` - Watch for changes and rebuild automatically
