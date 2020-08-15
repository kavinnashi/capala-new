<?php 

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "capaladb";
$myConnection= mysqli_connect("$servername","$username","$password","$dbname") or die ("could not connect to mysql"); 

$inv_first_name=$_POST['inv_first_name'];
$inv_last_name=$_POST['inv_last_name'];
$inv_company_name=$_POST['inv_company_name'];
$inv_job_title=$_POST['inv_job_title'];
$inv_investor_type=$_POST['inv_investor_type'];
$inv_mobile_number=$_POST['inv_mobile_number'];
$inv_email_id=$_POST['inv_email_id'];
$inv_website=$_POST['inv_website'];
$inv_city=$_POST['inv_city'];
$inv_pincode=$_POST['inv_pincode'];
$inv_linkedin=$_POST['inv_linkedin'];
$inv_funding_stage=$_POST['inv_funding_stage'];
$inv_founded_year=$_POST['inv_founded_year'];
$inv_country=$_POST['inv_country'];
$inv_product_stage=$_POST['inv_product_stage'];
$inv_sector=$_POST['inv_sector'];

$query = "
INSERT INTO uploadinvestorform
(invFirstName, invLastName, invCompanyName, invJobTitle, invInvestorType, invMobileNumber, invEmailId, invWebsite, invCity, invPincode, invLinkedin, invFundingStage, invFoundedYear, invCountry, invProductStage, invSector) VALUES
('$inv_first_name', '$inv_last_name', '$inv_company_name', '$inv_job_title', '$inv_investor_type', '$inv_mobile_number', '$inv_email_id', '$inv_website', '$inv_city', '$inv_pincode', '$inv_linkedin', '$inv_funding_stage', '$inv_founded_year', '$inv_country', '$inv_product_stage', '$inv_sector');";



mysqli_query($myConnection,$query) or die('Error, query failed');








?>