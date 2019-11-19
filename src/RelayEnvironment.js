import { Environment, Network, RecordSource, Store } from "relay-runtime";

async function fetchRelay(params, variables, _cacheConfig, _uploadables) {
  const response = await fetch("http://localhost:4000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: params.text,
      variables
    })
  });

  console.log(response);

  const json = await response.json();

  if (Array.isArray(json.errors)) {
    console.log(json.errors);
    throw new Error(
      `Error fetching GraphQL query '${
        params.name
      }' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
        json.errors
      )}`
    );
  }

  return json;
}

const network = Network.create(fetchRelay);
const store = new Store(new RecordSource(), {
  gcReleaseBufferSize: 10
});

export default new Environment({
  network,
  store
});
