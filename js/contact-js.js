function programChange(){
  $(".accelator-section").toggle();
}










// Get the modal
var modal = document.getElementById("startup");

// Get the button that opens the modal
var btn = document.getElementById("startupBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function goBack() {
  window.history.back();
}
// When the user clicks on the button, open the modal
window.onload = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  goBack();
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
   // document.getElementById("regForm").submit();
   //$("#regForm").submit();
   //submit();
  
    goBack();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

$("#regForm").submit(function(event) {
  var ajaxRequest;

  /* Stop form from submitting normally */
  event.preventDefault();

  /* Clear result div*/
  $("#result").html('');

  /* Get from elements values */
  var values = new FormData();    
  values.append( 'video_pitch', $('#video_pitch')[0].files[0]);

  values.append( 'startup_name', $('#startup_name').val());
console.log(values)
  /* Send the data using post and put the results in a div. */
  /* I am not aborting the previous request, because it's an
     asynchronous request, meaning once it's sent it's out
     there. But in case you want to abort it you can do it
     by abort(). jQuery Ajax methods return an XMLHttpRequest
     object, so you can just use abort(). */
     ajaxRequest= $.ajax({
          url: $(this).attr('action'),
          type: "post",
          data: values,
          dataType:'json',
          processData: false,
          contentType: false
      });

  /*  Request can be aborted by ajaxRequest.abort() */

  ajaxRequest.done(function (response, textStatus, jqXHR){

       // Show successfully for submit message
       $("#result").html('Submitted successfully');
  });

  /* On failure of request this function will be called  */
  ajaxRequest.fail(function (){

      // Show error
      $("#result").html('There is error while submit');
  });
});



function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    // for (i = 0; i < y.length; i++) {
    //   // If a field is empty...
    //   if (y[i].value == "") {
    //     // add an "invalid" class to the field:
    //     y[i].className += " invalid";
    //     // and set the current valid status to false:
    //     valid = false;
    //   }
    // }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
      document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
  }
  
  function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
  }
  