// If the max width is less than 650 px --> remove .last-card and .last-attributes. 

function resize() {
    if ( $(window).width() < 650) {     
        $("#toRemove1").removeClass("last-card");
        $("#toRemove2").toggleClass("last-attributes");
    }
    else {
        $("#toRemove1").addClass("last-card");
        $("#toRemove2").addClass("last-attributes");
    }
}       
$(window).on("resize", resize);
resize(); // call once initially

// Mobile navigation JS




// function removeAt650(){
//     var lastCard = document.getElementById("toRemove1");
//     var lastAttribute = document.getElementById("toRemove2");
//     lastCard.classList.remove("last-card");
//     lastAttribute.classList.remove("last-attributes");
//     }

// function addAt650(){
//     var lastCard = document.getElementById("toRemove1");
//     var lastAttribute = document.getElementById("toRemove2");
//     lastCard.classList.add("last-card");
//     lastAttribute.classList.add("last-attributes");
//     }

