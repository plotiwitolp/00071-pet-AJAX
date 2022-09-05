/**
 * AJAX on vanilla JS
 */

window.onload = function () {
  document.querySelector('#show_ip').addEventListener('click', getAjaxGetVanillaJS);
  document.querySelector('#show_ip2').addEventListener('click', getAjaxGetJQuery);
};

function getAjaxGetVanillaJS() {
  ajaxGet();
}
function getAjaxGetJQuery() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      document.querySelector('#myip2').innerHTML = request.responseText;
    }
  };
  request.open('GET', './ajaxtest.php');
  request.send();
}

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

/**
 * AJAX on jQuery
 */
$.ajax({
  url: 'ajaxtest.php',
  success: function () {
    getAjaxGetJQuery;
  },
});
