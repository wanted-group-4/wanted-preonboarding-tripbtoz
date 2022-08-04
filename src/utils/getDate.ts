const getDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  return { today, year, month };
};

export default getDate;
