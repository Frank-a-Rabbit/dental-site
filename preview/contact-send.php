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
<html xmlns="http://www.w3.org/1999/xhtml"><!-- #BeginTemplate "/Templates/Block.dwt" --><!-- DW6 -->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!-- #BeginEditable "doctitle" -->
<title>Contact Us</title>
<!-- #EndEditable -->
<!-- #BeginEditable "head" -->
<!-- #EndEditable -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
 
<script type="text/javascript" src="flexdropdown.js"> 
 
/***********************************************
* Flex Level Drop Down Menu- (c) Dynamic Drive DHTML code library (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for this script and 100s more
***********************************************/
 
</script>
<script src="Scripts/swfobject_modified.js" type="text/javascript"></script>

<script type="text/javascript" src="fadeslideshow.js">

/***********************************************
* Ultimate Fade In Slideshow v2.0- (c) Dynamic Drive DHTML code library (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for this script and 100s more
***********************************************/

</script>
<script type="text/javascript">
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
</script>
<script type="text/javascript">
var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-22540843-4']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
</script>
<link href="stylesheet.css" rel="stylesheet" type="text/css" />
<style type="text/css">
a:link {
	color: #FFF;
	text-decoration: none;
}
a:visited {
	color: #FFF;
	text-decoration: none;
}
a:hover {
	color: #CCC;
	text-decoration: none;
}
a:active {
	text-decoration: none;
}
</style>
</head>

<body onload="MM_preloadImages('images/Navigation_r1_c1.jpg','images/Navigation_r1_c2.jpg','images/Navigation_r1_c3.jpg','images/Navigation_r1_c4.jpg','images/Navigation_r1_c5.jpg','images/Navigation_r1_c6.jpg','images/SubNavigationCheckUpsOVER.jpg','images/SubNavigationPreventativeOVER.jpg','images/SubNavigationCosmeticOVER.jpg','images/SubNavigationWisdomOVER.jpg','images/SubNavigationImplantsOVER.jpg')">

<div class="container">
  <div class="header"><!-- end .header --><img src="images/Header.jpg" width="1135" height="99" border="0" usemap="#Map" />
    <map name="Map" id="Map">
      <area shape="rect" coords="897,9,1124,40" href="contact.htm" />
      <area shape="rect" coords="893,48,1131,91" href="tel:5135237515" />
    </map>
    <br /><!-- #BeginLibraryItem "/Library/navigation.lbi" -->
<script type="text/javascript">
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
</script>
<table width="1135" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td><a href="about.htm" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('home','','images/Navigation_r1_c1.jpg',1)"><img src="images/NavigationUP_r1_c1.jpg" alt="Home" name="home" width="97" height="53" border="0"></a></td>
    <td><a href="meetstaff.htm" data-flexmenu="a" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('meet','','images/Navigation_r1_c2.jpg',1)"><img src="images/NavigationUP_r1_c2.jpg" alt="About Us" name="meet" width="142" height="53" border="0"></a></td>
    <td><a href="topics.htm" data-flexmenu="c" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('family','','images/Navigation_r1_c3.jpg',1)"><img src="images/NavigationUP_r1_c3.jpg" alt="Family Dentistry" name="family" width="243" height="53" border="0"></a></td>
    <td><a href="cosmetic.htm" data-flexmenu="b" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('cosmetic','','images/Navigation_r1_c4.jpg',1)"><img src="images/NavigationUP_r1_c4.jpg" alt="Cosmetic Dentistry" name="cosmetic" width="279" height="53" border="0"></a></td>
    <td><a href="insurance.htm" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('forms','','images/Navigation_r1_c5.jpg',1)"><img src="images/NavigationUP_r1_c5.jpg" alt="Patient Forms" name="forms" width="194" height="53" border="0"></a></td>
    <td><a href="contact.htm" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('contact','','images/Navigation_r1_c6.jpg',1)"><img src="images/NavigationUP_r1_c6.jpg" alt="Contact Us" name="contact" width="180" height="53" border="0"></a></td>
  </tr>
</table>
<ul id="a" class="flexdropdownmenu">
<li><a href="doctors.htm">Meet the Doctors</a></li>
<li><a href="staff.htm">Meet the Staff</a></li>
</ul><ul id="b" class="flexdropdownmenu">
  <li><a href="bridges.htm">Dental Bridges</a></li>
  <li><a href="crowns.htm">Dental Crowns</a></li>
  <li><a href="implants.htm">Dental Implants</a></li>
  <li><a href="dentures.htm">Dentures</a></li>
  <li><a href="ortho.htm">Orthodontics</a></li>
  <li><a href="bleaching.htm">Tooth Whitening</a></li>
</ul>

<ul id="c" class="flexdropdownmenu">
  <li><a href="fillings.htm">Composite Fillings</a></li>
  <li><a href="cleaning.htm">Dental Exam & Cleaning</a></li>
  <li><a href="xrays.htm">Dental X-rays</a></li>
  <li><a href="gumtreat.htm">Periodontics</a></li>
  <li><a href="rootcanal.htm">Root Canal</a></li>
  <li><a href="extractions.htm">Tooth Extraction</a></li>
  <li><a href="impacted.htm">Wisdom Tooth Removal</a></li>
  <li><a href="accidents.htm">Emergency Dentist</a></li>
</ul>
<!-- #EndLibraryItem --><img src="images/AnimationImage01.jpg" width="1135" height="400" border="0" /><br />
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td><a href="xrays.htm" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('xrays','','images/SubNavigationCheckUpsOVER.jpg',1)"><img src="images/SubNavigationCheckUpsUP.jpg" alt="Check Ups and Xrays" name="xrays" width="227" height="227" border="0"></a></td>
      <td><a href="cleaning.htm" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('cleaning','','images/SubNavigationPreventativeOVER.jpg',1)"><img src="images/SubNavigationPreventativeUP.jpg" alt="Preventative Care" name="cleaning" width="227" height="227" border="0"></a></td>
      <td><a href="cosmetic.htm" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('cosmeticdent','','images/SubNavigationCosmeticOVER.jpg',1)"><img src="images/SubNavigationCosmeticUP.jpg" alt="Cosmetic Dentistry" name="cosmeticdent" width="227" height="227" border="0"></a></td>
      <td><a href="extractions.htm" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('extractions','','images/SubNavigationWisdomOVER.jpg',1)"><img src="images/SubNavigationWisdomUP.jpg" alt="Wisdom Teeth and Extractions" name="extractions" width="227" height="227" border="0"></a></td>
      <td><a href="implants.htm" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('implants','','images/SubNavigationImplantsOVER.jpg',1)"><img src="images/SubNavigationImplantsUP.jpg" alt="Implants and Dentures" name="implants" width="227" height="227" border="0"></a></td>
    </tr>
  </table>
  </div>
 <div class="page-title"> <!-- #BeginEditable "PageTitle" --> 
                  <!-- #BeginLibraryItem "/Library/eyecandy3.lbi" --><!-- #EndLibraryItem -->
                  <div align="left">Contact Us</div>
                  <!-- #EndEditable --></div>
  <div class="content"><!-- #BeginEditable "PageBody" --> 
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
                  <p>&nbsp;</p>
                        
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <!-- #EndEditable -->
  
    
  <!-- end .content --></div>
  <div class="footer"><!-- #BeginLibraryItem "/Library/footer.lbi" --><br>
<table width="700" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td width="12%" align="center"><strong><a href="about.htm"><font color="#CCCCCC">Home</font></a></strong></td>
    <td width="15%" align="center"><strong><a href="meetstaff.htm"><font color="#CCCCCC">Meet Us</font></a></strong></td>
    <td width="22%" align="center"><strong><a href="topics.htm"><font color="#CCCCCC">Family Dentistry</font></a></strong></td>
    <td width="25%" align="center"><strong><a href="cosmetic.htm"><font color="#CCCCCC">Cosmetic Dentistry</font></a></strong></td>
    <td width="12%" align="center"><strong><a href="insurance.htm"><font color="#CCCCCC"> Info</font></a></strong></td>
    <td width="14%" align="center"><strong><a href="contact.htm"><font color="#CCCCCC">Contact Us</font></a></strong></td>
  </tr>
</table>
<p>&nbsp;</p>
<p align="center"><!-- #BeginLibraryItem "/Library/copyright.lbi" --><font color="#FFFFFF" size="2">&copy; Copyright 2016 -
<script language="Javascript">
  <!-- //
  var date = new Date();
  document.write(date.getFullYear());
//   -->
</script></font>
<a href="http://www.dentalwebsmith.com" 
target=_blank><font color="#F0F0F0">Dental WebSmith, Inc.</font></a><font color="#FFFFFF"> and Hamilton Dental Group. All rights reserved worldwide. </font><font color=#F0F0F0><b>Disclaimer:</b></font> 
<font color="#FFFFFF">The information provided within is intended to help you better understand dental 
conditions and procedures. It is not meant to serve as delivery of medical or 
dental care. If you have specific questions or concerns, contact your health care 
provider.</font><!-- #EndLibraryItem --></p>
<p align="center"><a href="privacy.htm"><font color="#CCCCCC">Privacy Policy</font></a></p>
<!-- #EndLibraryItem --><p><!-- end .footer --></p>
  </div>
<!-- end .container --></div>
</body>
<!-- #EndTemplate --></html>
