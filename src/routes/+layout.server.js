export const prerender = auto;

export const load = ({ url }) => {
  const currentRoute = url.pathname;

  return {
    currentRoute
  };
};
