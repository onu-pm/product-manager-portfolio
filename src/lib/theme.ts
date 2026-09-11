export type Theme = "light" | "dark";

// Shared by ThemeToggle (dock button) and LightBulb (background easter egg)
// so both flip the exact same client-side state.
export function toggleTheme() {
  const root = document.documentElement;
  const current: Theme = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const next: Theme = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try {
    window.localStorage.setItem("theme", next);
  } catch {
    // ignore
  }
}
