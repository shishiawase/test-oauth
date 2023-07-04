const getUnixTimeStamp = (shift = 0) => Number((new Date() / 1000 + shift) | 0);

window.onload = () => {
  document.getElementById("button").onclick = () => {
    const date = new Date();
    const timestamp = Number(date);

    document.getElementById(
      "logs"
    ).innerHTML = `Date: ${date}<br />Timestamp: ${timestamp}`;
  };
};
