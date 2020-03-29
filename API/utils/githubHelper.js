import fetch from "node-fetch";

const url = 'https://api.github.com';

export const findByHandle = async (handle) => {
  const options = {
    method: 'GET'
  };

  try {
    const response = await fetch(`${url}/users/${handle}`, options);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
  } catch (error) {
    console.log(error);
  }

  throw new Error(`github handle "${handle}" not found`);
}