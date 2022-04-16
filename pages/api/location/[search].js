const API_BASE_URL = "https://www.metaweather.com/api/location";

export default async function getForecast(req, res) {
  try {
    const { search } = req.query;

    const url = `${API_BASE_URL}/search/?query=${search}`;

    const response = await fetch(url);

    const results = await response.json();

    const data = results.map((result) => {
      const { title: city, woeid: id } = result;

      return {
        city,
        id,
      };
    });

    res.status(200).json({ ok: true, data });
  } catch (error) {
    res.status(400).json({ ok: false, data: [] });
  }
}
