document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-switch');
    if (!button) return;
    const sync = () => button.setAttribute('aria-pressed', String(document.documentElement.dataset.theme === 'dark'));
    sync();
    button.addEventListener('click', () => {
        const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = theme;
        try { localStorage.setItem('theme', theme); } catch (_) {}
        sync();
    });
});
