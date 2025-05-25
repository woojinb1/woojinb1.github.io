#!/bin/bash

# Navigate to the project directory
cd public/projects

# Find all HTML files and handle spaces in filenames
find . -name "*.html" | while read -r file; do
  echo "Updating $file..."
  
  # Add FontAwesome CSS if not already present
  if ! grep -q "font-awesome" "$file"; then
    sed -i '' 's|<link rel="stylesheet" href="../styles.css">|<link rel="stylesheet" href="../styles.css">\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">|' "$file"
  fi
  
  # Add theme switcher HTML if not already present
  if ! grep -q "theme-switch-wrapper" "$file"; then
    sed -i '' 's|<body>|<body>\n    <div class="theme-switch-wrapper">\n        <label class="theme-switch" for="checkbox">\n            <input type="checkbox" id="checkbox" />\n            <div class="slider round">\n                <div class="slider-icons">\n                    <i class="fas fa-sun"></i>\n                    <i class="fas fa-moon"></i>\n                </div>\n            </div>\n        </label>\n    </div>\n    |' "$file"
  fi
  
  # Add theme switcher script if not already present
  if ! grep -q "theme-switcher.js" "$file"; then
    sed -i '' 's|</body>|    <script src="../theme-switcher.js"></script>\n</body>|' "$file"
  fi
done

echo "All project files have been updated with dark mode support!" 