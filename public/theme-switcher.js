// Theme switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    // If user has previously selected a theme, apply it
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    } else {
        // Check if user's system preferences are set to dark mode
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            toggleSwitch.checked = true;
            localStorage.setItem('theme', 'dark');
        }
    }

    // Function to switch theme
    function switchTheme(e) {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            toggleSwitch.checked = false;
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            toggleSwitch.checked = true;
        }
    }

    // Add event listener for theme switch - click on label instead of change event
    document.querySelector('.theme-switch').addEventListener('click', function(e) {
        // Prevent the default checkbox behavior
        e.preventDefault();
        switchTheme();
    });
}); 