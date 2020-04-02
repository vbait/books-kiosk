const { PUBLIC_URL } = process.env;

const delay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

export default {
  fetch: async (path) => {
    await delay();
    const response = await fetch(`${PUBLIC_URL}${path}`);
    return response.json();
  },
};
