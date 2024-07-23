const authorize = (data) => {
  const avatarHtml = `<div class="avatar" style="background-image:url('https://avatars.mds.yandex.net/get-yapic/${data.default_avatar_id}/islands-middle')"></div>`;
  const nameHtml = `<div class="name">${data.display_name}</div>`;

  document.getElementById("auth").innerHTML = `${avatarHtml}${nameHtml}`;
};

const fetchYandexData = (token) =>
  fetch(`https://login.yandex.ru/info?format=json&oauth_token=${token}`).then(
    (res) => res.json()
  );

window.onload = () => {
  document.getElementById("button").onclick = () => {
    window.YaAuthSuggest.init(
      {
        client_id: "5d752d1cc538431ab8e367cba7fc77a4",
        response_type: "token",
        redirect_uri: "https://test-oauth-eight.vercel.app/token/",
      },
      "https://test-oauth-eight.vercel.app",
      {
        view: "button",
        parentId: "buttonContainer",
        buttonSize: "m",
        buttonView: "main",
        buttonTheme: "light",
        buttonBorderRadius: "22",
        buttonIcon: "ya",
      }
    )
      .then(({ handler }) => handler())
      .then(async (data) => {
        const result = await fetchYandexData(data.access_token);

        authorize(result);

        // console.log(`Result: ${result}\nData: ${data}`);
      })
      .catch((error) => console.log("Что-то пошло не так: ", error));
  };
};
