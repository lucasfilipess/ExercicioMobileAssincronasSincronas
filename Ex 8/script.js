window.onload = async function GetData() {
  let tempHtml = '';
  await fetch('./receitas.json')
    .then(response => response.json())
    .then(data => {

      for (let i = 0; i < Object.keys(data.results).length; i++) {
        tempHtml += '<ul style="list-style:none; display: flex; flex-direction: column;align-items: center; justify-content: center;">';
        tempHtml += "<li><h2>" + data.results[i].title + "</h2></li>";
        tempHtml += `<li><a  style="text-decoration: none;"  target="blank" href = "` + data.results[i].href + `">Receita</a></li>`;
        tempHtml += "<li><p>" + data.results[i].ingredients + "</p></li>";
        tempHtml += `<li><img style=" width: 200px;height: 150px;" src = "` + data.results[i].thumbnail + `"></li>`;
        tempHtml += '</ul>';
      }

      document.getElementById('detail').innerHTML = tempHtml;

    })
    .catch(error => {
      console.log(error);
    });
}

