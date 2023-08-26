const buttonEl = document.getElementsByClassName("change");
const imgEl = document.querySelector(".image");
const linkEl = document.querySelector(".link")
const changeContentEl = document.getElementById("changeContentEl");
const tagNameEl = document.getElementsByTagName('h1')
buttonEl[0].style.backgroundColor = "red"
buttonEl[0].style.border = "none"
buttonEl[0].textContent = "Change Background Image"
buttonEl[0].style.color = "white"
buttonEl[1].style.backgroundColor = "blue"
buttonEl[1].style.border = "none"
buttonEl[1].style.color = "white"


changeContentEl.addEventListener("click", function() {
    imgEl.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png";
    imgEl.alt = "Facebook";
    imgEl.style.width = "165px"
    imgEl.style.height = "auto"
    console.log("clicked");
    linkEl.textContent = "Facebook"
});


function changeBackgroundOne() {
    document.body.style.backgroundImage = "url('https://img.freepik.com/free-vector/seamless-white-interlaced-rounded-arc-patterned-background_53876-97975.jpg')"
}

function changeTagName() {
    tagNameEl[0].textContent = "Yay you changed it!"
} 