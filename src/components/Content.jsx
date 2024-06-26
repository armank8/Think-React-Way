import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "./contexts/themeContext";

export default function Content() {
  return (
    <div>
      <h1>This is a Content</h1>

      <Counter>
        {() => {
          return (
            <ThemeContext.Consumer>
              {({ theme,switchTheme }) => (
                <HoverCounter
                  count={counter}
                  incrementCount={incrementCount}
                  theme={theme}
                  switchTheme={switchTheme}
                />
              )}
            </ThemeContext.Consumer>
          );
        }}
      </Counter>
    </div>
  );
}
