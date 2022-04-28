
async function getData() {
  let input = document.getElementById("input-text").value;
  let inputLan = document.getElementById("lang-val").value;
  let inputLanSour = document.getElementById("lang-val-source").value;

  try {
    let res = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      body: JSON.stringify({
        q: input,
        source: inputLanSour,
        target: inputLan,
        format: "text",
      }),

      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log(data.translatedText);

    document.getElementById("translated-text").innerHTML = data.translatedText;
  } catch (err) {
    console.log(err);
  }
}
