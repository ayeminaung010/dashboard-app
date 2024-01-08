$(document).ready(function () {
  $("#dataTable").DataTable();

  var inputElement = document.querySelector(
    '#dataTable_filter input[type="search"]'
  );
  inputElement.setAttribute("placeholder", "Enter xxxxx");
});
