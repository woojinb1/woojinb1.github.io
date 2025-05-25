#!/bin/bash

# Navigate to the public directory
cd public

# Process all HTML files in public directory
find . -name "*.html" | while read -r file; do
  echo "Updating theme toggle in $file..."
  
  # Replace the old toggle structure with the new one
  sed -i '' 's|<div class="slider round">\s*<div class="slider-icons">|<div class="theme-icon">|' "$file"
  sed -i '' 's|</div>\s*</div>|</div>|' "$file"
done

# Navigate to projects directory and update HTML files there
cd projects
find . -name "*.html" | while read -r file; do
  echo "Updating theme toggle in projects/$file..."
  
  # Replace the old toggle structure with the new one
  sed -i '' 's|<div class="slider round">\s*<div class="slider-icons">|<div class="theme-icon">|' "$file"
  sed -i '' 's|</div>\s*</div>|</div>|' "$file"
done

echo "All theme toggles have been updated to use the new button style!" 