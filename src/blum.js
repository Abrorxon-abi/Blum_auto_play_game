import { request } from "./utils.js";
import { BaseURL, headers } from "./helpers/api.js";

export async function getBalance(token) {
  return await request(
    "GET",
    `${BaseURL}user/balance`,
    {
      ...headers,
      authorization: token,
    },
    false
  );
}

export async function startGame(token) {
  return await request(
    "POST",
    `${BaseURL}game/play`,
    {
      ...headers,
      authorization: token,
    },
    false
  );
}

export async function claimPoints(gameId, points, token) {
  return await request(
    "POST",
    `${BaseURL}game/claim`,
    {
      ...headers,
      "Content-Type": "application/json",
      authorization: token,
    },
    false,
    JSON.stringify({ gameId, points })
  );
}
