window.onload = function () {



    var modal = document.getElementById("things");
    var img = document.getElementsByClassName("image-container");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    
    $(".image-container").on("click", function(){
        modal.style.display = "block";
    });
    // img.onclick = function () {
    //     modal.style.display = "block";
    //     modalImg.src = this.src;
    //     captionText.innerHTML = this.alt;
    // }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
};