
window.onload=function(){
    var translatebtn = document.getElementById("btn-translator");
    var txtOutput = document.getElementById("text-output");
    var txtInput = document.getElementById("text-input");

    var serverURL = "https://api.funtranslations.com/translate/groot.json";
    // "https://api.funtranslations.com/translate/pirate.json";

    function constructURL(text){
        return serverURL + "?" + "text=" + text;
    }

    function errorHandler(error){
        console.log("error occured",error);
        alert("Error occured at server side..:(");
    }

    function clickHandler(){
        var textInput= txtInput.value;
        
        fetch(constructURL(textInput))
        .then(response => response.json())
        .then(json => {
            var textOutput = json.contents.translated;
            txtOutput.innerText = textOutput;
            })
        .catch(errorHandler);
    };

    translatebtn.addEventListener("click",clickHandler);
  }