
    var quiztitle = "iPhone(A1) - Final";


 function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
/*var gmail = prompt('Have you logged into your gmail account on this browser? \n\nPlease type Yes or No')
if (gmail=="no"||gmail=="No") {
    openInNewTab("https://www.gmail.com/");
}*/





    /**
    * Set the information about your questions here. The correct answer string needs to match
    * the correct choice exactly, as it does string matching. (case sensitive)
    *
    */
	var sourceview=0;
	var newnewnew="abc";


  var quiz1="U2FsdGVkX1/5ZtRoH64sSlzhQjPERl+f9glS9+1wGSSAG56d2ayjlbwBFl/HgE3mAoe04+nSKsde8tPmBKp+nt/xVKQBI+Qa2areDY8teSqtJEoHj9F804+VbpdQx/dCiCIUYye15oHjS0BKMYqxiLrDKwpzr76frIi6O/ypXWc0zsxAkx2Dxcs1fXqifjlP0ZpZMZu6MKN+/MWQ9KwmRX96Qt0c0KKxsMwtoj2eVjrOVnJ5gj+rYfz9iyEXjj4/AwfNDzSsl71XzAP+o4dpAlCOxBljAPpcIF+wrkQiKwGI+tAmYLhVI2i2dHU4M1qrMEej8Vi9ubGYfA5TR5Zukbb6dbxCBMuOhnLshOKn1C/eU/EQJ3o5jV9NxrI3wGq23I/nlQM/3d0gwZaOccQiidozdNYW2w/O4b6QzNhG5qwWm7qftyENTHT6mp97PQCOWz5ftf92BWU0XRVmJwm2s27dmSJMsvZDiyG0LwuD123xTSNID8EfDV19DdZ5+kLkbml0VM4mTvRnK2Csku5IIiivJhVwcIA8cNgIC88WSPNd/k3wYXvEIxtKSAyDVKjTauAggBlPwE3K80G9w9KEkEFztavldZke8S08VZJTSgwVJ2W4jnGO5gpaHrRIihvYHvdGL4syFmaXxQbFJ/OqM/pT64dR3ohe+hecXFmHDjzxwM/y/RSIy9vXvcojiFbGyT4zff9qpVdkaRLCbVJlwf06MyqC8xVPSdfHVMoS4B1JMYn2obCmZYttHkl9OqnZoSp9sNK/7N8P0S5eHwlFiPgM198tT1mwLADVuCKf1zT1m7z4blgtsFd7jJClHCosTkZtZSxUbvxo8MlodBp27froHnbOffWR4BPrBSMjMipOCTOlQbtsDH0m1m/36o6VWCSUU4fW6vmoeoPtaABieAWHa9DBd+9WanRahvXyxGEUWXZnn75vS4QNOjrLSJjmtPZ2ygF8tD10+xPw5CMMocAaWDVd+1VomQns7i2dM4ZceLIhfXx57ImvXFKAQDj3KFUteS+oq8X3mMzu67GFZcDi7rD22x/GA/zCRupK7obsvtJneywUg6gAhJZxWhB0zqxRotQq4CkIw5R4G+sKH/nkMzRLKF5Mh92zvroZWrBEVGBeyR+TpPoSKzUTxeqo85C+pKZXZVUTIa7d4SxdADHIY+3WDzv6NO3Pm4t7tFguvIp3skMq9hdXALSh/lzk4t0zustp43bvT0tJ4HCdRDOU30kB5I+cVVu67kuzxUczlAquuKRZ4y43FwGXpmX+okw+ZPfgeDfMOkmwaERIRJLKIDfz3Jj8sKpv7ifvvHrQz3hKm6SPBVdkeNER2BTQeDm91FF5wf+SdhVPkwF8NjK7sFXxU7N3+xtgk8zL9QtV4afLzZkZ7P656BF7Aw//00MrFI51IG84IsC4XZXuNHUEcjnQWG+vNb7w9S+CnnlnCItks7e4Sh+NDdgTnTvCab2Qvku7twNSE45KJ541U5FiZvIVt5bkYkfj9qJjd8EtMkpoqT738x8HzgDFDLIcl2tcF1WX7dUqkYSex/Fb9eHtBh90r9e8GEKGdBto42QSjRU6XlAvqGmVX3UtyuxBLnwukaj5Mad2ST0274d2wmcRqVzIv0o/sMQXsHggmRhPlXog0XBB/b7PccdmICPq+vrCg/yUQ0BS7vWBEhUBgK5VqnWj+3tef4/cZ4rxbBmiEfiOZWmTo+jM/vHRbTEyUD6y4EfJuzxPTK9MBheXy5ehmjlwb+20jPpzTHkvIinx6akKgGv1gl4qQqdoXYWmX2RlQCI0buwAu/P0nXIFtVo6JRcsa1Mur9735Pz/2FSw2eQyvak6I1ARKtNVpluH2Y5UKu4VFMV7wFQlrk0wzUSTeG5dq8T8Y9tCoov0Q0YJmVdvoFThxc55OEuXtMnGD7SdFysWDScElBuR5F29eda3r8EhFhQjN08nO2mzE8TtNY/kPyrsycXJUGKE3zMhfvP4LgQ="

var textElem2P = CryptoJS.RC4.decrypt(quiz1, "abc");
var textElem2 = textElem2P.toString(CryptoJS.enc.Utf8);
console.log(textElem2);
var quiz = JSON.parse(textElem2);
//console.log(quiz);

/***************************Sleep Lock Disable********************/

screen.keepAwake = true;







    /******* No need to edit below this line *********/
    var currentquestion = 0, score = 0, submt=true, picked;

    jQuery(document).ready(function($){

        /**
         * HTML Encoding function for alt tags and attributes to prevent messy
         * data appearing inside tag attributes.
         */
        function htmlEncode(value){
          return $(document.createElement('div')).text(value).html();
        }

        /**
         * This will add the individual choices for each question to the ul#choice-block
         *
         * @param {choices} array The choices from each question
         */
        function addChoices(choices){
            if(typeof choices !== "undefined" && $.type(choices) == "array"){
                $('#choice-block').empty();
                for(var i=0;i<choices.length; i++){
                    $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');
                }
            }
        }

        /**
         * Resets all of the fields to prepare for next question
         */
        function nextQuestion(){
            submt = true;
            $('#explanation').empty();
            $('#question').text(quiz[currentquestion]['question']);
            $('#pager').text('Question ' + Number(currentquestion + 1) + ' of ' + quiz.length);
            if(quiz[currentquestion].hasOwnProperty('image') && quiz[currentquestion]['image'] != ""){
                if($('#question-image').length == 0){
                    $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question'])).insertAfter('#question');
                } else {
                    $('#question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question']));
                }
            } else {
                $('#question-image').remove();
            }
            addChoices(quiz[currentquestion]['choices']);
            setupButtons();
        }

        /**
         * After a selection is submitted, checks if its the right answer
         *
         * @param {choice} number The li zero-based index of the choice picked
         */
        function processQuestion(choice){
            if(quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']){
                $('.choice').eq(choice).css({'background-color':'#ffffff'});
                $('#explanation').html('<strong>Proceed To Next Question!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
                score=score+5;
            } else {
                $('.choice').eq(choice).css({'background-color':'#ffffff'});
                $('#explanation').html('<strong>Proceed To Next Question!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
            }
            currentquestion++;
            $('#submitbutton').html('NEXT QUESTION &raquo;').on('click', function(){
                if(currentquestion == quiz.length){
                    endQuiz();
                } else {
                    $(this).text('Submit Answer').css({'color':'#222'}).off('click');
                    nextQuestion();
                }
            })
        }

        /**
         * Sets up the event listeners for each button.
         */
        function setupButtons(){
            $('.choice').on('mouseover', function(){
                $(this).css({'background-color':'#e1e1e1'});
            });
            $('.choice').on('mouseout', function(){
                $(this).css({'background-color':'#fff'});
            })
            $('.choice').on('click', function(){
                picked = $(this).attr('data-index');
                $('.choice').removeAttr('style').off('mouseout mouseover');
                $(this).css({'border-color':'#222','font-weight':700,'background-color':'#c1c1c1'});
                if(submt){
                    submt=false;
                    $('#submitbutton').css({'color':'#000'}).on('click', function(){
                        $('.choice').off('click');
                        $(this).off('click');
                        processQuestion(picked);
                    });
                }
            })
        }


var jString = JSON.stringify(quiz1);

       //inactive

     var countTab = 0;



        //COOKIES




        function setCookie(cname,cvalue,exmin) {
    var d = new Date();
    d.setTime(d.getTime() + (exmin*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



function checkCookie(user1) {
    var user=getCookie("username");
    if (user != "") {
         alert("Student Id " + user + " has already been used to take the quiz from this computer.");
        var perm = prompt("Please call Examiner!")
        if(perm == "letemgo")
            {
            setCookie("username", user, -1000);
            }
        else{
            endQuiz();
        }

    } else {
       user = user1;
       if (user != "" && user != null) {
           setCookie("username", user, 30);
           init();
       }
    }
}





        /**
         * Quiz ends, display a message.
         */
        function endQuiz(){
            $('#explanation').empty();
            $('#question').empty();
            $('#choice-block').empty();
            $('#submitbutton').remove();
            $('#question-image').remove();
            $('#question').text("You got " + score + " out of " + (5*quiz.length) + " correct. \n PLEASE SELECT SEND SCORE.");
            $(document.createElement('h2')).css({'text-align':'center', 'font-size':'4em'}).text(score).insertAfter('#question');
            var newscore = Math.round(score/quiz.length * 100) + '%';
            document.cookie = "Score="+score;





             $form = ('<form method="post" name="myemailform" action="form-to-email.php"><input type="text" id="name1" name="name"><button id="finalnew">Send Score</button><input type="text" name="score" id="score1"><div align="center"><input id="subbmit" type="submit" value="SEND!!!"></div></form> ');
if(sourceview == 0){
$('#frame').append($form);
sourceview++
}
            document.getElementById('name1').value = document.getElementById('studentId').value
            document.getElementById('score1').value = score


            document.getElementById('name1').style.display="none"
            document.getElementById('score1').style.display="none"
			document.getElementById('subbmit').style.display="none"
			$( "#finalnew" ).click(function() {
  var sendscore1=prompt("Please Call Examiner to Submit Score")
  if(sendscore1=="s" || sendscore1=="S"){
			document.getElementById('subbmit').style.display="block"
			}

});




        }

        /**
         * Runs the first time and creates all of the elements for the quiz
         */






        function init(){
            //add title
            if(typeof quiztitle !== "undefined" && $.type(quiztitle) === "string"){
                $(document.createElement('h1')).text(quiztitle).appendTo('#frame');
            } else {
                $(document.createElement('h1')).text("Quiz").appendTo('#frame');
            }

            //add pages and questions
            if(typeof quiz !== "undefined" && $.type(quiz) === "array"){
                //add pager
                $(document.createElement('p')).addClass('pager').attr('id','pager').text('Question 1 of ' + quiz.length).appendTo('#frame');
                //add first question
                $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#frame');
                //add image if present
                if(quiz[0].hasOwnProperty('image') && quiz[0]['image'] != ""){
                    $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[0]['image']).attr('alt', htmlEncode(quiz[0]['question'])).appendTo('#frame');
                }
                $(document.createElement('p')).addClass('explanation').attr('id','explanation').html('&nbsp;').appendTo('#frame');

                //questions holder
                $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');

                //add choices
                addChoices(quiz[0]['choices']);

                //add submit button
                $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Submit Answer').css({'font-weight':700,'color':'#222','padding':'30px 0'}).appendTo('#frame');

                setupButtons();
            }
        }

        $(document).keydown(function(event){

    if(event.keyCode==123){
        alert("USED F12");
    return false;
   }
else if(event.ctrlKey && event.shiftKey && event.keyCode==73){
    alert("USED CRTL + SHIFT + I");
      return false;  //Prevent from ctrl+shift+i
   }

else if(event.ctrlKey){
    alert("USED CRTL");
      return false;  //Prevent from ctrl
   }

else if(event.shiftKey){
    alert("USED SHIFT");
      return false;  //Prevent from ctrl+shift+i
   }
});
$(document).on("contextmenu",function(e){
   e.preventDefault();
});








function toggleFullscreen(elem) {
  elem = elem || document.documentElement;
  if (!document.fullscreenElement && !document.mozFullScreenElement &&
    !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  }
}




$form = ('<input type="text" id="studentId" class="studentId" required><br><input type="button" id="idButton" class="idButton" value="Start!"><br><input type="button" id="subButton" class="subButton" value="Submit!"><br><div id="tabs"></div> ');

$('#frame').append($form);
document.getElementById('subButton').style.display="none";
             document.getElementById('idButton').addEventListener('click', function() {
  toggleFullscreen();
});








     var stuID = $('.studentId').val();

        function submit(){
    var submit = prompt("Submit your Quiz! Call Examiner!")
    if(submit == "s")
        {
             var stuID = $('.studentId').val();
            var bodymail =stuID+" : "+(Math.round(score/quiz.length * 100))/10;

           openInNewTab("https://mail.google.com/mail/?view=cm&ui=2&tf=0&fs=1&to=cs570quiz%40gmail.com&su="+stuID+" -- Quiz-3&body="+bodymail);
        }
}






        function isFullScreen() {
    console.log("full");// do stuff for full screen
}

function notFullScreen() {
    console.log("not full!!");
    endQuiz();// do stuff for non-full screen
}
        $(".subButton").click(function(){
            submit();
        });

        $(".idButton").click(function() {
        var stuID = $('.studentId').val();

        if (isNaN(stuID) || stuID == "" || stuID < 999 || stuID > 19999) {
   alert('Please Enter Correct Student ID!');
} else{
   alert('GET READY!');
    $(".idButton").hide();
     $('.studentId').prop('disabled', true);
            if($('.studentId').prop("disabled"))
                {
                     $(window).on("blur focus", function(e) {
    var prevType = $(this).data("prevType");

    if (prevType != e.type) {   //  reduce double fire issues
        switch (e.type) {
            case "blur":
                countTab = countTab + 1;
                if(countTab == 1){
                    $('#tabs').text("you have left window " + countTab + " time")
                }
                else{
                  $('#tabs').text("you have left window " + countTab + " times")
                }

                if(countTab == 5)
                    {
                        endQuiz();
                    }
                break;
            case "focus":

                break;
        }
    }

    $(this).data("prevType", e.type);
})

                   $(document).keydown(function(e){
    e.preventDefault();
  });
                    var keyboard = 0;
                  $(document).keydown(function(event){
                      var audio = new Audio('alert.mp3');

                    alert("Keyboard used!!")
                    keyboard++;
                    if(keyboard == 3)
                        {
                            audio.play();
                          endQuiz();
                        }

                  });
                checkCookie(stuID);




document.addEventListener("fullscreenchange", function () {
    if (document.fullscreen) {
        isFullScreen();
    } else {
        notFullScreen();
    }
}, false);

document.addEventListener("mozfullscreenchange", function () {
    if (document.mozFullScreen) {
        isFullScreen();
    } else {
        notFullScreen();
    }
}, false);

document.addEventListener("webkitfullscreenchange", function () {
    if (document.webkitIsFullScreen) {
        isFullScreen();
    } else {
        notFullScreen();
    }
}, false);



                }

}


});


    });
