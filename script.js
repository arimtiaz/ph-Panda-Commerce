const shoeColor = document.getElementById("ShoeBackground");
shoeColor.style.backgroundColor = "salmon";

// const niceCards = document.getElementsByClassName("card101");
// document.getElementById('card101').style.borderRadius = '3em';

function b1(){
    document.getElementById("thisButton").style.display="none";
}

function onHover()
{
    $("#profileCover").attr('src', 'images/pakainfo.png');
}

function offHover()
{
    $("#profileCover").attr('src', 'images/infinityknow.png');
}