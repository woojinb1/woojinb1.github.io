#!/bin/bash

# Root directory of the project
cd "$(dirname "$0")"

echo "Starting theme toggle update for all HTML files..."

# Function to update HTML files
update_html_files() {
  local dir="$1"
  
  # Find all HTML files in the directory
  find "$dir" -type f -name "*.html" | while read -r file; do
    echo "Processing $file"
    
    # Check if file contains old theme toggle structure
    if grep -q "slider round" "$file"; then
      echo "Updating theme toggle in $file"
      
      # Create a temporary file
      temp_file=$(mktemp)
      
      # Process the file
      awk '{
        if ($0 ~ /<div class="slider round">/) {
          in_toggle = 1
          toggle_content = "<div class=\"theme-icon\">\n                <i class=\"fas fa-sun\"></i>\n                <i class=\"fas fa-moon\"></i>\n            </div>"
          print toggle_content
        } else if (in_toggle && $0 ~ /<\/div>/) {
          if (inner_div_closed) {
            in_toggle = 0
            inner_div_closed = 0
          } else {
            inner_div_closed = 1
          }
        } else if (!in_toggle) {
          print $0
        }
      }' "$file" > "$temp_file"
      
      # Replace the original file with the processed one
      mv "$temp_file" "$file"
    fi
  done
}

# Update HTML files in public directory
update_html_files "public"

# Update HTML files in public/projects directory
update_html_files "public/projects"

echo "All theme toggles have been updated to use the new button style!" 