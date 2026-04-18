export default function ThemeScript() {
  const code = `(() => {
  try {
    const stored = localStorage.getItem('uxea-theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (systemDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch (_) {}
})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
