var picture=[
    "Me.jpg",
    "Paru.jpg",
    "Reshmi.jpg",
    "Hari.jpg",
    "Prabha.JPG",
    "VKC.jpg",
    "me1.jpg",
    "Paru1.JPG"
];
var people_name=[
    "Vaishnavi Sharma (Me)",
    "Shivani Sharma (Sister)",
    "Reshmi Cp (Mother)",
    "Hari (Father)",
    "Prabha (Grand Mother)",
    "VK Chandrashekran (Grand Father)",
    "My First Birthday ",
    "My Sister's Frist Birthday"
];
var i=0;
function Nextpic(){
    document.getElementById("people").innerHTML=people_name[i];
    document.getElementById("Image").src=picture[i];
    i++
    if (i==7){
        i=0
    }
}
