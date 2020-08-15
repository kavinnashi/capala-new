$('#video_pitch').bind('change', function () {
  var filename = $("#video_pitch").val();
  if (/^\s*$/.test(filename)) {
   
    $("#noFile").text("No file chosen..."); 
  }
  else {
	
	$('#video_pitch').prev("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
  }
});

$('#product_demo').bind('change', function () {
	var filename = $("#product_demo").val();
	if (/^\s*$/.test(filename)) {
	
		$('#product_demo').prev("#noFile").text("No file chosen..."); 
	}
	else {
	 
		$('#product_demo').prev("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
	}
  });

  $('#logo').bind('change', function () {
	var filename = $("#logo").val();
	if (/^\s*$/.test(filename)) {
	
		$('#logo').prev("#noFile").text("No file chosen..."); 
	}
	else {
	  
		$('#logo').prev("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
	}
  });

  $('#prod_image').bind('change', function () {
	var filename = $("#prod_image").val();
	if (/^\s*$/.test(filename)) {
	  
		$('#prod_image').prev("#noFile").text("No file chosen..."); 
	}
	else {
	  
		$('#prod_image').prev("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
	}
  });

  $('#pitch_deck').bind('change', function () {
	var filename = $("#pitch_deck").val();
	if (/^\s*$/.test(filename)) {
	  
		$('#pitch_deck').prev("#noFile").text("No file chosen..."); 
	}
	else {
	  
		$('#pitch_deck').prev("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
	}
  });
