import { ThemeProvider } from '@/providers/themeProvider';
import MainPage from "./main";

export default function Home() {  
  return (
    // wrap with ThemeProvider using ThemeContext for theme change
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
}
