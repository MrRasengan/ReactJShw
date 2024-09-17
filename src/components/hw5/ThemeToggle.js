import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './actions';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={handleToggleTheme}
        />
        Dark Theme
      </label>
    </div>
  );
};

export default ThemeToggle;