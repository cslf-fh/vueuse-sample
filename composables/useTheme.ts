const useTheme = () => {
  const mode = useColorMode({
    storageKey: 'theme',
    attribute: 'data-theme',
    emitAuto: true,
  });
  const { next: changeTheme } = useCycleList(['dark', 'light', 'auto'], {
    initialValue: mode,
  });

  return {
    theme: readonly(mode),
    changeTheme,
  };
};

export default useTheme;
