
document.getElementById("date");
function getDate2() {
    const todayDate = new Date();
    const year = String(todayDate.getFullYear()).padStart(2, "0");
    const month = String(todayDate.getMonth()+1).padStart(2, "0");
    const date = String(todayDate.getDate()).padStart(2, "0");
    const hours = String(todayDate.getHours()).padStart(2, "0");
    const minutes = String(todayDate.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${date} ${hours}:${minutes}`;
};

document.getElementById("userImg");
function getImg() {
const images = ["0.png","1.png","2.png","3.png","4.png","5.png",
"6.png", "7.png","8.png","9.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
return `${chosenImage}`;
};

// 더보기 코드
$(function () {
    $(".col").slice(0, 3).show(); // select the first ten
    $("#load").click(function (e) {
      // click event for load more
      e.preventDefault();
      $(".col:hidden").slice(0, 6).show(); // select next 10 hidden divs and show them
      if ($(".col:hidden").length == 0) {
        // check if any hidden divs still exist
        $("#loadAll").empty();
        alert("No more"); // alert if there are none left
      }
    });
  });