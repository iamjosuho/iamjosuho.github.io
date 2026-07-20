document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Logic
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const root = document.documentElement;
      const currentTheme = root.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // Language Override Logic
  const langLinks = document.querySelectorAll('.lang-switch a');
  langLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Set flag so we don't automatically redirect them later
      localStorage.setItem('langOverride', 'true');
    });
  });
});
