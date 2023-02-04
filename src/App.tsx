import { AppRoutes } from './navigation';
import { ThemeProvider } from './theme';

const App = () => (
  <ThemeProvider>
    <AppRoutes />
  </ThemeProvider>
);

export default App;
