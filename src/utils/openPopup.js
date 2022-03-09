export default function _openPopupPost(url, data, winName, winTitle, width, height) {
  console.log(url, data, winName, winTitle, width, height)
  var form = document.createElement("form");
  form.target = winName;
  form.method = "POST";
  form.action = url;
  form.style.display = "none";

  for (var key in data) {
    var input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = data[key];
    form.appendChild(input);
  }

  document.body.appendChild(form);
  window.open("", winName, `title=${winTitle},height=${height},width=${width},scrollbars=auto`);
  form.submit();
  document.body.removeChild(form);
};
