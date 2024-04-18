
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
