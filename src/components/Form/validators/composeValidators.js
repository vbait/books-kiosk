const composeValidators = (...props) => (value) => {
  // eslint-disable-next-line
  const errors = [];
  for (let i = 0; i < props.length; i += 1) {
    const error = props[i](value);
    if (error) {
      errors.push(error);
    }
  }
  return errors.length ? errors : undefined;
};

export default composeValidators;
