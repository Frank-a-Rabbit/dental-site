<?php
if ( $_SERVER[REQUEST_METHOD] == "POST" )
   {
    session_start();
    include_once 'securimage.php';
    $securimage = new Securimage();
    if ($securimage->check($_POST['code']) == false)
       { die('<html><head><title>Sorry The Code You entered was Incorrect</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>
<body bgcolor="#FFFFFF" text="#000000">
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<table width="500" border="0" cellspacing="0" cellpadding="0" align="center">
  <tr>
    <td><div align="center">The code you entered was incorrect.  Please go back and try again.<br><input type=button value="Back" onClick="history.go(-1)"></div></td>
  </tr>
</table>
</body></html>'); }
   }
   else
   { die('<html><head><title>Forbidden</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>
<body bgcolor="#FFFFFF" text="#000000">
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<table width="500" border="0" cellspacing="0" cellpadding="0" align="center">
  <tr>
    <td><div align="center">You have arrived at this before entering a code. <a href="index.htm">Click Here to return to site</a></div></td>
  </tr>
</table>
</body></html>'); }
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><!-- #BeginTemplate "/Templates/mobile.dwt" --><!-- DW6 -->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<meta name="MobileOptimized" content="320"/>
<meta name="viewport" id="viewport" content="width=device-width, target-densitydpi=160, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!-- #BeginEditable "doctitle" -->
<title>Contact Us</title>
<!-- #EndEditable -->
<link href="../mobile.css" rel="stylesheet" type="text/css" />
<!-- #BeginEditable "head" -->
<!-- #EndEditable -->
<style type="text/css">
a:link {
	color: #00457e;
	text-decoration: none;
}
a:visited {
	color: #00457e;
	text-decoration: none;
}
a:hover {
	color: #CCC;
	text-decoration: none;
}
a:active {
	text-decoration: none;
	color: #00457e;
}
</style>
  


<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-147648344-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-147648344-1');
</script>



</head>

<body>
<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center"><img src="../images/HeaderMobile.jpg" width="320" height="147" border="0" usemap="#Map" /></td>
      </tr>
     
      <tr>
        <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center"><a href="index.htm"><img src="../images/MobileNavHome.jpg" width="105" height="49" border="0" /></a></td>
            <td align="center"><a href="meet.htm"><img src="../images/MobileNavMeet.jpg" width="105" height="49" border="0" /></a></td>
            <td align="center"><a href="topics.htm"><img src="../images/MobileNavServices.jpg" width="105" height="49" border="0" /></a></td>
          </tr>
          <tr>
            <td align="center"><a href="map.htm"><img src="../images/MobileNavMapHours.jpg" width="105" height="49" border="0" /></a></td>
            <td align="center"><a href="ptinfo.htm"><img src="../images/MobileNavPtInfo.jpg" width="105" height="49" border="0" /></a></td>
            <td align="center"><a href="contact.htm"><img src="../images/MobileNavContact.jpg" width="105" height="49" border="0" /></td>
          </tr>
        </table></td>
      </tr>
      <tr>
        <td>&nbsp; </td>
      </tr>
      <tr>
        <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="10" bgcolor="#FFFFFF">&nbsp;</td>
    <td background="../images/ContentBGMobile.png"><div class="page-title"><!-- #BeginEditable "PageTitle" --> 
                  
                  <div align="left">Contact Us</div>
                  <!-- #EndEditable --></div><!-- #BeginEditable "Body" --> 
                  <p><br />
                    <br />
                     <?php
$infoname ="$_POST[hidDoctorName]";
$info ="$_POST[hidDoctorEmail]";
// $bcc ="$_POST[hidDoctorEmail]";
$headers .= "From: $infoname <$info>\r\n";
$headers .= "Reply-To: \"$_POST[txtName]\" <$_POST[txtEmail]>\r\n";
// $headers .= "Bcc: $bcc\n\n";
$to = "$_POST[txtEmail]";
$subject = "Contact Us";
$str= file_get_contents('contact.txt');
$body="Name: $_POST[txtName]\n";
$body.="Email: $_POST[txtEmail]\n";
$body.="Subject: $_POST[txtEmail2]\n";
$body.="Phone: $_POST[txtPhone]\n";

// Refering Doctors
if ($_POST[txtRefer]) {
  $body.="Refering Doctor:  $_POST[txtRefer]\n"; }
	

	
// Checkboxes	
if ($_POST[chkMiscCB1]) {
  $body.="$_POST[hidMiscCB1]\n"; } 
if ($_POST[chkMiscCB2]) {
  $body.="$_POST[hidMiscCB2]\n"; } 
if ($_POST[chkMiscCB3]) {
  $body.="$_POST[hidMiscCB3]\n"; } 
if ($_POST[chkMiscCB4]) {
  $body.="$_POST[hidMiscCB4]\n"; } 
if ($_POST[chkMiscCB5]) {
  $body.="$_POST[hidMiscCB5]\n"; } 
if ($_POST[chkMiscCB6]) {
  $body.="$_POST[hidMiscCB6]\n"; } 
if ($_POST[chkMiscCB7]) {
  $body.="$_POST[hidMiscCB7]\n"; } 
if ($_POST[chkMiscCB8]) {
  $body.="$_POST[hidMiscCB8]\n"; } 
if ($_POST[chkMiscCB9]) {
  $body.="$_POST[hidMiscCB9]\n"; }
  
// Text Boxes
if ($_POST[txtMiscTXT1]) {
  $body.="$_POST[hidMiscTXT1]:  $_POST[txtMiscTXT1]\n"; }
if ($_POST[txtMiscTXT2]) {
  $body.="$_POST[hidMiscTXT2]:  $_POST[txtMiscTXT2]\n"; }
if ($_POST[txtMiscTXT3]) {
  $body.="$_POST[hidMiscTXT3]:  $_POST[txtMiscTXT3]\n"; }
if ($_POST[txtMiscTXT4]) {
  $body.="$_POST[hidMiscTXT4]:  $_POST[txtMiscTXT4]\n"; }
if ($_POST[txtMiscTXT5]) {
  $body.="$_POST[hidMiscTXT5]:  $_POST[txtMiscTXT5]\n"; }
if ($_POST[txtMiscTXT6]) {
  $body.="$_POST[hidMiscTXT6]:  $_POST[txtMiscTXT6]\n"; }
if ($_POST[txtMiscTXT7]) {
  $body.="$_POST[hidMiscTXT7]:  $_POST[txtMiscTXT7]\n"; }
if ($_POST[txtMiscTXT8]) {
  $body.="$_POST[hidMiscTXT8]:  $_POST[txtMiscTXT8]\n"; }
if ($_POST[txtMiscTXT9]) {
  $body.="$_POST[hidMiscTXT9]:  $_POST[txtMiscTXT9]\n"; }

// Comment Box
if ($_POST[txtOther]) {
  $body.="Comments:  $_POST[txtOther]\n"; }
// Send Mail to Doctor and Patient
mail($info, $subject, $body, $headers);
if (mail($to, $subject, $str, $headers)) {
	
  echo('<p>Thank you for your Comments. An e-mail confirming 
                    that we received your comments will be sent to you shortly. 
                    </p>');
 } else {
  echo("<p>Message delivery failed...</p>");
 }
?> 

                  </p><p>&nbsp;</p>
                  <!-- #EndEditable --></td>
  </tr>
</table>
</td>
      </tr>
      <tr>
        <td><hr /></td>
      </tr>
      <tr>
        <td height="15" valign="middle">
          <center>
          </center>
       </td>
      </tr>
      <tr>
        <td><div class="copyright"><!-- #BeginLibraryItem "/Library/copyright-mobile.lbi" -->&copy; Copyright 2016-
<script language="Javascript">
  <!-- //
  var date = new Date();
  document.write(date.getFullYear());
//   -->
</script>
<a href="http://www.dentalwebsmith.com" 
target=_blank><font color="#0099FF">Dental WebSmith, Inc.</font></a> and Hamilton Dental Group. All rights reserved worldwide.<!-- #EndLibraryItem --></div></td>
      </tr>
    </table></td>
  </tr>
</table>

<map name="Map" id="Map">
  <area shape="rect" coords="163,35,292,64" href="tel:5138680669" />
</map>
</body>
<!-- #EndTemplate --></html>
