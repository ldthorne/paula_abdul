$(document).click(function() {
    console.log("click")
    getPic();
})

function getPic() {
    var randInt = Math.floor((Math.random() * picsArr.length) + 1)
    $('#image').attr("src", picsArr[randInt])
}

setInterval(function() {
    $("body").toggleClass("backgroundRed");
}, 100)
