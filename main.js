function start() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    noise= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kzM7EAQDP/model.json', modelloaded);
}

function modelloaded() {
    noise.classify(gotresults); 
}

function gotresults(error, results) {
    if(error){
console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("hear").innerHTML='i can hear: ' + results[0].label;
        document.getElementById("acc").innerHTML='Accuracy: ' + (results[0].confidence*100).toFixed(2)+"%";

        img1=document.getElementById("al1");
        img2=document.getElementById("al2");
        img3=document.getElementById("al3");
        img4=document.getElementById("al4");
        
        if(results[0].label=="tearing paper"){
            img1.src='aliens-01.gif';
            img2.src='aliens-02.png';
            img3.src='aliens-03.png';
            img4.src='aliens-04.png';
        }

        else if(results[0].label=="guitar playing"){
            img1.src='aliens-01.png';
            img2.src='aliens-02.gif';
            img3.src='aliens-03.png';
            img4.src='aliens-04.png';
        }

        else if(results[0].label=="pen tapping"){
            img1.src='aliens-01.png';
            img2.src='aliens-02.png';
            img3.src='aliens-03.gif';
            img4.src='aliens-04.png';
        }

        else{
            img1.src='aliens-01.png';
            img2.src='aliens-02.png';
            img3.src='aliens-03.png';
            img4.src='aliens-04.gif';
        }
    }
}