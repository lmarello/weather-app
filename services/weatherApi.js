export const getForecast = async (cityId) => {
  const response = await fetch(`/api/weather?cityId=${cityId}`);
  const { data } = await response.json();
  return data;
};
