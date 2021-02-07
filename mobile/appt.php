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
<title>Make An Appointment with Dr. Fattahi, Dentist, Hamilton OH</title>
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
                  <div align="left">Make An Appointment</div>
                  <!-- #EndEditable --></div><!-- #BeginEditable "Body" --> 
                  <blockquote> 
                    <blockquote> 
                      <div align="center"> </div>
                    </blockquote>
                  </blockquote>
                  <blockquote> 
                    <blockquote> 
                      <div align="center"> </div>
                    </blockquote>
                  </blockquote>
                  <p>To make an appointment, simply call us at <br />
                  <!-- #BeginLibraryItem "/Library/phone.lbi" --><b>(513) 868-0669</b><!-- #EndLibraryItem --> during business hours:</p><!-- #BeginLibraryItem "/Library/bizhours.lbi" --><div align="left">
  <blockquote>
    <table width="62%" border="0">
      <tr> 
        <td width="35%"><b>Monday</b></td>
        <td width="15%"><b>8:00</b></td>
        <td width="13%"><b>a.m.</b></td>
        <td width="8%"> 
          <div align="center"><b>-</b></div>
        </td>
        <td width="15%"><b>5:00</b></td>
        <td width="14%"><b>p.m.</b></td>
      </tr>
      <tr> 
        <td width="35%"><b>Tuesday</b></td>
        <td width="15%"><b>8:00</b></td>
        <td width="13%"><b>a.m.</b></td>
        <td width="8%"> 
          <div align="center"><b>-</b></div>
        </td>
        <td width="15%"><b>5:00</b></td>
        <td width="14%"><b>p.m.</b></td>
      </tr>
       <tr> 
        <td width="35%"><b>Wednesday</b></td>
        <td width="15%"><b>9:00</b></td>
        <td width="13%"><b>a.m.</b></td>
        <td width="8%"> 
          <div align="center"><b>-</b></div>
        </td>
        <td width="15%"><b>5:00</b></td>
        <td width="14%"><b>p.m.</b></td>
      </tr>
      <tr> 
        <td width="35%"><b>Thursday</b></td>
        <td width="15%"><b>8:00</b></td>
        <td width="13%"><b>a.m.</b></td>
        <td width="8%"> 
          <div align="center"><b>-</b></div>
        </td>
        <td width="15%"><b>5:00</b></td>
        <td width="14%"><b>p.m.</b></td>
      </tr>
      <tr>
        <td><b>Friday</b></td>
        <td><b>8:00</b></td>
        <td><b>a.m.</b></td>
        <td><div align="center"><b>-</b></div></td>
        <td><b>4:00</b></td>
        <td><b>p.m.</b></td>
      </tr>
    </table>
    
  </blockquote>
</div>
    <!-- #EndLibraryItem --><p> or fill out the information below and we will contact you 
                    shortly to set up a time that's convenient for you!</p>
    <p><b><font size="-2">NOTICE: In order to ensure confidentiality, 
                    please do not send personal medical information through e-mail.</font></b></p>
                  <form action="appt-send.php" method="post" name="makeAppt" id="makeAppt" onsubmit="MM_validateForm('txtName','','R','txtPhone','','R','txtEmail','','RisEmail');return document.MM_returnValue">
                    <table width="100%">
                      <tr> 
                        <td width="60%" height="38"><font color="#FF0000">*Required 
                        fields</font></td>
                      </tr>
                      <tr>
                        <td>Name: <font color="#FF0000">*</font></td>
                      </tr>
                      <tr> 
                        <td width="60%"> 
                          <input type="text" name="txtName" size="40" />
                          <input type="hidden" name="hidDoctorName" value="Dr. Fattahi" />
                        </td>
                      </tr>
                      <tr>
                        <td>Daytime Phone: <font color="#FF0000">*</font></td>
                      </tr>
                      <tr> 
                        <td width="60%"> 
                          <input type="text" name="txtPhone" size="40" />
                        </td>
                      </tr>
                      <tr>
                        <td>E-mail Address: <font color="#FF0000">*</font></td>
                      </tr>
                      <tr> 
                        <td width="60%"> 
                          <input type="text" name="txtEmail" size="40" />
                          <input name="hidDoctorEmail" type="hidden" value="info@HamiltonDentalGroup.com" />
                        </td>
                      </tr>
                      <tr> 
                        <td height="33" valign="bottom">&nbsp;</td>
                      </tr>
                      <tr>
                        <td>Will this 
                        be your first visit with us?</td>
                      </tr>
                      <tr> 
                        <td width="60%">  <blockquote> 
                            <p> 
                              <input type="radio" name="rdoVisit" value="rdoVisitYes" />
                              Yes<br />
                              <input type="radio" name="rdoVisit" value="rdoVisitNo" />
                              No </p>
                          </blockquote></td>
                      </tr>
                      <tr>
                        <td>Nature of 
                        the appointment:</td>
                      </tr>
                      <tr>
                        <td>   <blockquote> 
                            <input type="radio" name="rdoAppt" value="rdoAppt01" />
                            New Patient Exam 
                            <input type="hidden" name="hidAppt01" value="New Patient Exam" />
                            <br />
                            <input type="radio" name="rdoAppt" value="rdoAppt02" />
                            Cleaning 
                            <input type="hidden" name="hidAppt02" value="Cleaning" />
                            <br />
                            <input type="radio" name="rdoAppt" value="rdoAppt03" />
                            Cosmetic Consult 
                            <input type="hidden" name="hidAppt03" value="Cosmetic Consult" />
                            <br />
                            <input type="radio" name="rdoAppt" value="rdoAppt00" />
                            Other - Explain: 
                            <input type="text" name="txtExplain" size="40" />
                            <br />
                          </blockquote></td>
                      </tr>
                      <tr>
                        <td>Any other comments<br />
                        or concerns:</td>
                      </tr>
                      <tr> 
                        <td width="60%" height="132"> 
                          <textarea name="txtOther" cols="40" rows="6"></textarea>
                        </td>
                      </tr>
                      <tr> 
                        <td width="60%"> 
                          <input type="submit" name="Submit" value="Submit" />
                          <input type="reset" name="Reset" value="Reset" />
                        </td>
                      </tr>
                    </table>
                  </form>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
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
