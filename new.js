
    var quiztitle = "iPhone Midterm - 2";


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


  var quiz1="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"

var textElem2P = CryptoJS.RC4.decrypt(quiz1, "abc");
var textElem2 = textElem2P.toString(CryptoJS.enc.Utf8);
//console.log(textElem2);
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





            $form = ('<form method="post" name="myemailform" action="form-to-email.php"><input type="text" id="name1" name="name"><input type="text" name="score" id="score1"><div align="center"><input id="subbmit" type="submit" value="Send Score"></div></form> ');
if(sourceview == 0){
$('#frame').append($form);
sourceview++
}
            document.getElementById('name1').value = document.getElementById('studentId').value
            document.getElementById('score1').value = score


            document.getElementById('name1').style.display="none"
            document.getElementById('score1').style.display="none"





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
