$(document).ready(function () {
  $("#dataTable").DataTable();

  var inputElement = document.querySelector(
    '#dataTable_filter input[type="search"]'
  );
  inputElement.setAttribute("placeholder", "Enter xxxxx");

  // Select the <select> element
  $("#dataTable_length select option").css("background-color", "#1C242E");
});

// doughnut chart
var ctx = document.getElementById("doughnut").getContext("2d");
var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Amazon", "Facebook", "Pinterest", "Email Marketing"],
    datasets: [
      {
        label: "# of Votes",
        data: [50, 20, 35, 30],
        backgroundColor: ["#07A85F", "#B96A0E", "#067DBE", "#BC185F"],
        borderColor: ["#07A85F", "#B96A0E", "#067DBE", "#BC185F"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

//bar chart
var ctxBar = document.getElementById("bar").getContext("2d");
var myBarChart = new Chart(ctxBar, {
  type: "bar",
  data: {
    labels: ["SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI"],
    datasets: [
      {
        label: "# of Orders",
        data: [10, 9, 6, 15, 8, 10, 18],
        backgroundColor: ["#00A6FF"],
        borderColor: ["#00A6FF"],
        borderWidth: 1,
      },
      {
        label: "# of Returns",
        data: [16, 20, 10, 20, 17, 15, 25],
        type: "line", // this will set the second dataset as a line chart
        fill: false,
        borderColor: "#00A6FF",
        backgroundColor: "#00A6FF",
      },
    ],
  },
  options: {
    responsive: true,
  },
});

function showImagePreview() {
    var input = document.getElementById('imageUploadInput');
    var image = document.getElementById('uploadedImage');

    var reader = new FileReader();
    
    reader.onload = function(e) {
      image.src = e.target.result;
    };
    
    reader.readAsDataURL(input.files[0]);
  }