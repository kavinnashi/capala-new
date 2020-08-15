<?php 

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "capaladb";
$myConnection= mysqli_connect("$servername","$username","$password","$dbname") or die ("could not connect to mysql"); 
upload_files("video_pitch");
upload_files("product_demo");
upload_files("logo");
upload_files("prod_image");
upload_files("pitch_deck");
$startup_name=$_POST['startup_name'];
$description_of_solution=$_POST['description_of_solution'];
$tagline=$_POST['_tagline'];
$sector=$_POST['sector'];
$founder=$_POST['founder'];
$linked_in_link=$_POST['linked_in_link'];
$age=$_POST['age'];
$gender=$_POST['gender'];

$contact_email=$_POST['contact_email'];
$contact_number=$_POST['contact_number'];
$experience=$_POST['experience'];
$qualification=$_POST['qualification'];
$current_stage=$_POST['current_stage'];
$startup_date=$_POST['startup_date'];
$emp_strength=$_POST['emp_strength'];
$program=$_POST['program'];
$accelerator=$_POST['accelerator'];
$accelerator_link=$_POST['accelerator_link'];
$last_investment=$_POST['last_investment'];
$last_investment_by=$_POST['last_investment_by'];
$last_investment_date=$_POST['last_investment_date'];
$investment_firm=$_POST['investment_firm'];
$investment_stage=$_POST['investment_stage'];
$fund_raise=$_POST['fund_raise'];
$website_link=$_POST['website_link'];
$linkedin_link=$_POST['linkedin_link'];
$fb_link=$_POST['fb_link'];
$twitter_link=$_POST['twitter_link'];
$insta_link=$_POST['insta_link'];

$query = "
INSERT INTO uploadStartUpform
(instaLink, twitterLink, fbLink, websiteLink, fundRaise, investmentStage, investmentFirm,lastInvestmentDate,lastInvestmentBy,last_investment,accelerator_link,accelerator,program,emp_strength,startup_date,current_stage,qualification,experience,contact_number,contact_email,gender,age,linked_in_link,founder,sector,_tagline,description_of_solution,startup_name) VALUES
('$insta_link', '$twitter_link', '$fb_link', '$website_link', '$fund_raise', '$investment_stage', '$investment_firm', '$last_investment_date', '$last_investment_date', '$last_investment_date', '$last_investment_by', '$last_investment', '$accelerator_link', '$accelerator', '$last_investment_date', '$program', '$emp_strength', '$startup_date', '$current_stage', '$qualification', '$experience', '$contact_number', '$contact_email', '$gender', '$age', '$linked_in_link', '$founder', '$sector', '$_tagline', '$description_of_solution', '$startup_name');";



mysqli_query($myConnection,$query) or die('Error, query failed');





function upload_files($file) {
    $name= $_FILES[$file]['name'];

$tmp_name= $_FILES[$file]['tmp_name'];

$position= strpos($name, ".");

$fileextension= substr($name, $position + 1);

$fileextension= strtolower($fileextension);
if (isset($name)&& !empty($name)) {

    $path= 'Uploads/';
    if (empty($name))
    {
    echo "Please choose a file";
    }
    else if (!empty($name)){
    if (($fileextension !== "mp4") && ($fileextension !== "ogg")&& ($fileextension !== "png") && ($fileextension !== "webm"))
    {
    echo "The file extension must be .mp4, .ogg, or .webm in order to be uploaded";
    }
    
    
    else if (($fileextension == "mp4")  || ($fileextension == "ogg") || ($fileextension == "webm")|| ($fileextension == "png"))
    {
    if (move_uploaded_file($tmp_name, $path.$name)) {
    echo 'Uploaded!';
    }
    }
    }
    }

  }


?>