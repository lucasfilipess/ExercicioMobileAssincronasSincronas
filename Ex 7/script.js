window.onload = function GetData() {
  fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
}
export default GetData;