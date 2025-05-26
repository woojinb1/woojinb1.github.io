// Theme switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const themeIcon = document.querySelector('.theme-icon');
    const themeSwitchWrapper = document.querySelector('.theme-switch-wrapper');
    let hideTimeout;
    let isMobile = window.innerWidth <= 768;

    // 초기 체크박스 상태 설정
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        toggleSwitch.checked = true;
    } else {
        toggleSwitch.checked = false;
    }

    // Function to switch theme - 즉시 적용
    function switchTheme() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        // 클릭 애니메이션 추가
        themeIcon.classList.add('clicked');
        
        if (isDark) {
            // 라이트 모드로 전환
            document.documentElement.setAttribute('data-theme', 'light');
            document.documentElement.style.backgroundColor = '';
            document.documentElement.style.color = '';
            toggleSwitch.checked = false;
            localStorage.setItem('theme', 'light');
        } else {
            // 다크 모드로 전환
            document.documentElement.setAttribute('data-theme', 'dark');
            document.documentElement.style.backgroundColor = '#1a1a1a';
            document.documentElement.style.color = '#f0f0f0';
            toggleSwitch.checked = true;
            localStorage.setItem('theme', 'dark');
        }
        
        // 애니메이션 제거
        setTimeout(() => {
            themeIcon.classList.remove('clicked');
        }, 200);
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
    
    // Show the button when hovering over it (desktop only)
    themeSwitchWrapper.addEventListener('mouseenter', function() {
        if (!isMobile) {
            themeSwitchWrapper.classList.remove('fade-out');
            themeSwitchWrapper.classList.remove('hidden');
        }
    });
    
    // Add event listener for theme switch - click on label instead of change event
    document.querySelector('.theme-switch').addEventListener('click', function(e) {
        // Prevent the default checkbox behavior
        e.preventDefault();
        
        // 테마 전환 즉시 실행
        switchTheme();
        
        // Only reset timer on button click
        if (isMobile) {
            showToggleButton();
        }
    });
    
    // Initial auto-hide for mobile
    if (isMobile) {
        hideTimeout = setTimeout(hideToggleButton, 3000);
    }
}); 