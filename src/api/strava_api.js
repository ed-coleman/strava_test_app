const auth_link = "https://www.strava.com/oauth/token";

export function getActivites(res) {

console.log(res.access_token); 
  const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`;
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
      client_id: "107444",
      client_secret: "759218e8ae3715bfc8d094dbb4c8933debf4ca0e",
      refresh_token: "7acc5210bae1a7cb0b35dfad971ceb5fb6424a4f",
      grant_type: "refresh_token",
    }),
  })
    .then((res) => res.json())
    .then((res) => getActivites(res))
}

reAuthorize();
