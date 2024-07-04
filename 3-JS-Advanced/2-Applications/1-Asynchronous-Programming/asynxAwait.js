function Repos() {
  const button = document.getElementById("loadRepos").addEventListener("click", loadRepos);

  function loadRepos() {
    let url = "https://api.github.com/users/testnakov/repos";

    const httpRequest = new XMLHttpRequest();

    httpRequest.addEventListener("readystatechange", onLoad);
    httpRequest.open("GET", url);
    httpRequest.send();

    function onLoad() {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        const data = JSON.parse(httpRequest.responseText);
        document.getElementById("res").innerHTML = data.map(r => `<li>${r.name}</li>`).join("");
      }
    }
  }
}

Repos();
