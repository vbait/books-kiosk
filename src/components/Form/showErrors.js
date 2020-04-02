const showErrors = (meta) => {
  const { active, visited, invalid, submitFailed } = meta;
  return (submitFailed || visited) && !active && invalid;
};

export default showErrors;
