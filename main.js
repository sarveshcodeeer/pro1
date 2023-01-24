Webcam.set({

width : 350  ,
height : 300  ,
image_format : "png" , 
png_quality : 90 

})

camera = document.getElementById("camera");

Webcam.attach("#camera") ; 

function ci() {

Webcam.snap(function (data_uri){

    document.getElementById("result").innerHTML = "<img id='ir' src="+data_uri+">"
})

}

console.log("hi this is ml5 " , ml5.version ) 
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Zif_kKHUz/model.json" , modelLoaded);
 

function modelLoaded() {

console.log("model has loaded commander")

}

function ii() {

img = document.getElementById("ir");
classifier.classify(img,gotResult) ; 

}

function gotResult(error,results) {

if(error){

console.log(error)

}
else{

console.log(results)
document.getElementById("obname").innerHTML = "Person : " + results[0].label ; 
document.getElementById("ayname").innerHTML = "Accuracy :  " + results[0].confidence.toFixed(2) ; 

}



}
