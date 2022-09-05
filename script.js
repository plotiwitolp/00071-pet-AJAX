window.onload = function () {
  document.querySelector('#show_ip').addEventListener('click', function () {
    ajaxGet();
  });
};

function ajaxGet() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      document.querySelector('#myip').innerHTML = request.responseText;
    }
  };
  request.open('GET', './server.php');
  request.send();
}
