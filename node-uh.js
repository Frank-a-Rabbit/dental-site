const testFolder = 'C:/xampp/htdocs/dental';
const fs = require('fs');
const fsPromise = fs.promises;
const cheerio = require('cheerio');

// var arr = [];

// fs.readdir(testFolder, (err, files) = {
//     files.forEach(f = {
//         if(f.substring(f.lastIndexOf(".")) == ".htm") {
//             arr.push(f);
//         }
//     });
// });
// var newHeader;
// async function main() {
//     console.log("Starting");
//     let first = await getHtml();
//     let second = await processHtml(first);
//     console.log(second);
// }

const header = `
<header class="new-header" id="header">
    <div class="top-header">
    <div class="inner-cont controlled-width">
        <div class="address">
        <h4 class="blue-font">
            <span>1301 NW Washington Blvd. #1</span>
            <span>Hamilton, Ohio 45013</span>
        </h4>
        </div>
        <div class="logo">
        <a href="/" target="_self"><img src="images/newlogo.png" alt="Hamilton Dental Group"></a>
        </div>
        <div class="mobile-inner">
        <div class="logo-mobile">
            <img src="images/newlogomobile.png" alt="Hamilton Dental Group">
        </div>
        <div class="controls" id="toggle-nav">
            <i class="fa fa-bars open" aria-hidden="true"></i>
            <i class="fa fa-window-close close" aria-hidden="true"></i>
        </div>
        </div>
        <div class="contact blue-font">
        <div class="inner">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <h4>Contact Us Today!</h4>
        </div>
        <div class="phone">
            <h4>513-868-0669</h4>
        </div>
        </div>
    </div>
    </div>
    <nav class="primary-nav controlled-width">
    <div class="inner-cont">
        <div class="inner">
        <div class="inner-cont">
            <a href="index.htm" target="_self" class="main">Home</a>
        </div>
        <div class="inner-cont">
            <a href="meet-dentist-and-staff.htm" target="_self" class="main">Meet Us</a>
            <div class="dd">
            <ul>
                <li>
                <a href="meet-peyman-fattahi-dds.htm" target="_self">Meet the Doctors</a>
                    <a href="meet-our-staff.htm" target="_self">Meet the Staff</a>
                    <a href="office-location-photo-tour.htm" target="_self">Office info</a>
                </li>
            </ul>
            </div>
        </div>
        <div class="inner-cont">
            <a href="dental-topics.htm" target="_self" class="main">Family Dentistry</a>
            <div class="dd">
            <ul>
                <li>
                    <a href="fillings.htm" target="_self">Composite Fillings</a>
                    <a href="cleaning.htm" target="_self">Dental Exam &amp; Cleaning</a>
                    <a href="xrays.htm" target="_self">Dental X-rays</a>
                    <a href="gum-treatments.htm" target="_self">Periodontics</a>
                    <a href="root-canal-therapy.htm" target="_self">Root Canal</a>
                    <a href="extractions.htm" target="_self">Tooth Extraction</a>
                    <a href="impacted-tooth.htm" target="_self">Wisdon Tooth Removal</a>
                    <a href="emergency-dentist.htm" target="_self">Emergency Dentist</a>
                </li>
            </ul>
            </div>
        </div>
        <div class="inner-cont">
            <a href="cosmetic.htm" target="_self" class="main">Cosmetic Dentistry</a>
            <div class="dd">
            <ul>
                <li>
                    <a href="bridges.htm" target="_self">Dental Bridges</a>
                    <a href="crowns.htm" target="_self">Dental Crowns</a>
                    <a href="implants.htm" target="_self">Dental Implants</a>
                    <a href="dentures.htm" target="_self">Dentures</a>
                    <a href="orthodontics-braces.htm" target="_self">Orthodontics</a>
                    <a href="bleaching.htm" target="_self">Tooth Whitening</a>
                </li>
            </ul>
            </div>
        </div>
        <div class="inner-cont">
            <a href="insurance.htm" target="_self" class="main">Patient Info</a>
            <div class="dd">
            <ul>
                <li>
                    <a href="NewPatientForms2018.pdf" target="_self">New Patient Forms</a>
                    <a href="https://hamiltondentalgroup.com/blog/" target="_self">Blog</a>
                    <a href="articles.htm" target="_self">Articles</a>
                </li>
            </ul>
            </div>
        </div>
        <div class="inner-cont">
            <a href="contact.htm" target="_self" class="main">Contact Us</a>
        </div>
        </div>
    </div>
    </nav>
    <div class="mobile-nav">
    <div class="mobile-inner">
        <div class="address-mobile">
        <h4>
            <span>1301 NW Washington Blvd. #1</span>
            <span>Hamilton, Ohio 45013</span>
        </h4>
        </div>
        <div class="phone-mobile">
        <h4>513-868-0669</h4>
        </div>
    </div>
    <nav class="mobile-nav">
        <ul>
        <li class="mobile-li">
            <div class="inner">
            <a href="meet-dentist-and-staff.htm" target="_self">Meet us</a>
            <i class="fa fa-caret-down" aria-hidden="true" data-mobile-dd=""></i>
            </div>
            <div class="dropdown">
            <ul>
                <li class="no-disc">
                <div class="cont">
                    <a href="meet-peyman-fattahi-dds.htm" target="_self">Meet the Doctors</a>
                    <a href="meet-our-staff.htm" target="_self">Meet the Staff</a>
                    <a href="office-location-photo-tour.htm" target="_self">Office info</a>
                </div>
                </li>
            </ul>
            </div>
        </li>
        <li class="mobile-li">
            <div class="inner">
            <a href="dental-topics.htm" target="_self">Family Dentistry</a>
            <i class="fa fa-caret-down" aria-hidden="true" data-mobile-dd=""></i>
            </div>
            <div class="dropdown">
            <ul>
                <li class="no-disc">
                <div class="cont">
                    <a href="fillings.htm" target="_self">Composite Fillings</a>
                    <a href="cleaning.htm" target="_self">Dental Exam &amp; Cleaning</a>
                    <a href="xrays.htm" target="_self">Dental X-rays</a>
                    <a href="gum-treatments.htm" target="_self">Periodontics</a>
                    <a href="root-canal-therapy.htm" target="_self">Root Canal</a>
                    <a href="extractions.htm" target="_self">Tooth Extraction</a>
                    <a href="impacted-tooth.htm" target="_self">Wisdon Tooth Removal</a>
                    <a href="emergency-dentist.htm" target="_self">Emergency Dentist</a>
                </div>
                </li>
            </ul>
            </div>
        </li>
        <li class="mobile-li">
            <div class="inner">
            <a href="cosmetic.htm" target="_self">Cosmetic Dentistry</a>
            <i class="fa fa-caret-down" aria-hidden="true" data-mobile-dd=""></i>
            </div>
            <div class="dropdown">
            <ul>
                <li class="no-disc">
                <div class="cont">
                    <a href="bridges.htm" target="_self">Dental Bridges</a>
                    <a href="crowns.htm" target="_self">Dental Crowns</a>
                    <a href="implants.htm" target="_self">Dental Implants</a>
                    <a href="dentures.htm" target="_self">Dentures</a>
                    <a href="orthodontics-braces.htm" target="_self">Orthodontics</a>
                    <a href="bleaching.htm" target="_self">Tooth Whitening</a>
                </div>
                </li>
            </ul>
            </div>
        </li>
        <li class="mobile-li">
            <div class="inner">
            <a href="insurance.htm" target="_self">patient info</a>
            <i class="fa fa-caret-down" aria-hidden="true" data-mobile-dd=""></i>
            </div>
            <div class="dropdown">
            <ul>
                <li class="no-disc">
                <div class="cont">
                    <a href="NewPatientForms2018.pdf" target="_self">New Patient Forms</a>
                    <a href="https://hamiltondentalgroup.com/blog/" target="_self">Blog</a>
                    <a href="articles.htm" target="_self">Articles</a>
                </div>
                </li>
            </ul>
            </div>
        </li>
        <li class="mobile-li">
            <a href="contact.htm" target="_self">Contact us</a>
        </li>
        </ul>
    </nav>
    </div>
</header>`

const footer = `
<footer class="my-footer">
  <div class="inner controlled-width">
    <div class="links">
      <a href="index.htm">Home</a>
      <a href="meet-dentist-and-staff.htm">Meet Us</a>
      <a href="dental-topics.htm">Family Dentistry</a>
      <a href="cosmetic.htm">Cosmetic Dentistry</a>
      <a href="insurance.htm">Info</a>
      <a href="contact.htm">Contact Us</a>
    </div>
    <div class="bottom">
      <p class="disclaimer"><span color="#FFFFFF" class="copy">© Copyright 2016 -
        <script language="Javascript">
          <!-- //
          var date = new Date();
          document.write(date.getFullYear());
        //   -->
        </script>
        <a href="http://www.dentalwebsmith.com" target="_self">Dental WebSmith, Inc.</a>  
      </span> and Hamilton Dental Group. All rights reserved worldwide. <b>Disclaimer:</b>The information provided within is intended to help you better understand dental conditions and procedures. It is not meant to serve as delivery of medical or dental care. If you have specific questions or concerns, contact your health care provider.</p>
      <a href="privacy.htm" class="priv">Privacy Policy</a>
    </div>
  </div>
</footer>
`

const sheets = `
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="stylesheetHOME.css" rel="stylesheet" type="text/css">
`

const script = `
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script type="text/javascript" src="Scripts/shared.js"></script>
`

async function main() {
    var arr = [];

    let newArr = await fsPromise.readdir(testFolder, (err, files) {
        // files.forEach(f = {
        //     if(f.substring(f.lastIndexOf(".")) == ".htm") {
        //         arr.push(f);
        //     }
        // });
        for (let f of files) {
            if(f.substring(f.lastIndexOf(".")) == ".htm") {
                arr.push(f);
            }
        }
    });
    console.log(newArr)
    newArr.forEach(async (item) {
        let html = await getHtml(item);
        let updated = await updateHtml(item, html);
        // console.log(html);
    });
}

function getHtml(file) {
    return fsPromise.readFile("./"+file, "utf-8", (err, html) = {
        if(err) {
            console.log("err");
        }
    });
}

async function updateHtml(file, html) {
    let $ = cheerio.load(html);
    $("head").prepend(sheets);
    $("body").append(script);
    $(".header").before(header);
    $(".header").remove();
    $(".footer").before(footer);
    $(".footer").remove();
    return fsPromise.writeFile("./"+file, $.html(), err = console.log(err))
}

main();

// fs.writeFile("./testing.htm", getHtml(), err = console.log(err));
async function processHtml(file) {
    return f = await console.log(typeof file)
    // let $ = cheerio.load(file);
    // var header = $("#header");

    // fsPromise.readFile('./pocket-depth-reduction.htm', 'utf8', function (err, html) {
    //     if (err) {
    //         throw err; 
    //     }else{
    //         let $ = cheerio.load(html);
    //         let update = $.html(header);
    //         $(".header").before(update);
    //         $(".header").remove();
    //         return $.html();
    //     }    
    // });
}
// main();
// tryThis().then(res = {
//     let $ = cheerio.load(res);
//     var header = $("#header");

//     fs.readFile('./pocket-depth-reduction.htm', 'utf8', function (err, html) {
//         if (err) {
//             throw err; 
//         }else{
//             let $ = cheerio.load(html);
//             let update = $.html(header);
//             $(".header").before(update);
//             $(".header").remove();
//             console.log($.html());
//         }    
//     });
// })
// fs.readFile('./index.htm', 'utf8', function (err, html) {
//     if (err) {
//         throw err; 
//     }else{
//         let $ = cheerio.load(html);
//         let header = $(".header");
//         newHeader = $.html(header);
//         console.log(newHeader)
//     }    
// });