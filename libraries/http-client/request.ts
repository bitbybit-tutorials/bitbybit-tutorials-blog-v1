const defaultOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

/**
 * Provides an interface to fetch resources asynchronously across the network.
 *
 * @param url
 * @param options
 * @returns
 */
export async function makeRequest(url = "", options = defaultOptions) {
  const response = await fetch(url, options);
  return response.json();
}
