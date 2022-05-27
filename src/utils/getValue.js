const getValue = (obj, path, defaultValue) => {
  let current = obj;
  const paths = path?.split(".");

  paths.forEach((item) => {
    if (!current?.[item]) {
      current = defaultValue || null;
    } else {
      current = current?.[item];
    }
  });

  return current;
};

export default getValue;
