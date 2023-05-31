const auth_link = "https://www.strava.com/oauth/token";

export function getActivites(res) {

console.log(res.access_token);
  const activities_link = `https://www.strava.com/api/v3/clubs/ColumbiaCycling?access_token=${res.access_token}`;
  fetch(activities_link).then((res) => console.log(res.json()));
}

export function reAuthorize() {
  fetch(auth_link, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      client_id: import.meta.env.VITE_CLIENT_ID,
      client_secret: import.meta.env.VITE_CLIENT_SECRET,
      refresh_token: import.meta.env.VITE_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  })
    .then((res) => res.json())
    .then((res) => getActivites(res))
}

reAuthorize();