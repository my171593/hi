var canvas=document.getElementById("myCanvas");
playerx=150;
playery=50;
image_width=30;
image_height=30;
player1="";


function new_image(get_image){
    Image(get_image,function(Img){
        Image_object=Img;
        Image_object.scaleToWidth(image_width);
        Image_object.scaleToHeight(image_height);
        Image_object.set({
            top:playery,
            left:playerx

        });
canvas.add(Image_object);
    })
}

function player(){
    Image("player.png", function(Img){
        player1=Img;
        player1.scaleToWidth(150);
        player1.scaleToHeight(140);
        player1.set({
            top:player_y,
            left:player_x

        });
canvas.add(player1);
    })
}