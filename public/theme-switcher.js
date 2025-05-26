// Theme switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const themeIcon = document.querySelector('.theme-icon');
    const themeSwitchWrapper = document.querySelector('.theme-switch-wrapper');
    const currentTheme = localStorage.getItem('theme');
    let hideTimeout;
    let isMobile = window.innerWidth <= 768;

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
    function switchTheme() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        // Add click animation
        themeIcon.classList.add('clicked');
        
        setTimeout(() => {
            if (isDark) {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                toggleSwitch.checked = false;
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                toggleSwitch.checked = true;
            }
            
            // Remove animation class after theme change
            setTimeout(() => {
                themeIcon.classList.remove('clicked');
            }, 200);
        }, 150);
    }

    // Function to show the theme toggle button
    function showToggleButton() {
        if (isMobile) {
            themeSwitchWrapper.classList.remove('fade-out');
            themeSwitchWrapper.classList.remove('hidden');
            
            // Set timeout to hide the button after 3 seconds
            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(hideToggleButton, 3000);
        }
    }
    
    // Function to start hiding the theme toggle button (first fade, then hide)
    function hideToggleButton() {
        if (isMobile) {
            themeSwitchWrapper.classList.add('fade-out');
            
            // After fading out, hide completely
            setTimeout(() => {
                themeSwitchWrapper.classList.add('hidden');
            }, 1500);
        }
    }
    
    // Check if device is mobile on window resize
    window.addEventListener('resize', function() {
        isMobile = window.innerWidth <= 768;
        if (!isMobile) {
            // On desktop, always show the button
            themeSwitchWrapper.classList.remove('fade-out');
            themeSwitchWrapper.classList.remove('hidden');
            clearTimeout(hideTimeout);
        } else {
            // On mobile, start the hide timer
            showToggleButton();
        }
    });
    

    
    // Show the button when hovering over it (even when faded)
    themeSwitchWrapper.addEventListener('mouseenter', function() {
        themeSwitchWrapper.classList.remove('fade-out');
        themeSwitchWrapper.classList.remove('hidden');
    });
    
    // Add event listener for theme switch - click on label instead of change event
    document.querySelector('.theme-switch').addEventListener('click', function(e) {
        // Prevent the default checkbox behavior
        e.preventDefault();
        switchTheme();
        showToggleButton(); // Reset the timer when clicking the button
    });
    
    // Initial auto-hide for mobile
    if (isMobile) {
        hideTimeout = setTimeout(hideToggleButton, 3000);
    }
}); 