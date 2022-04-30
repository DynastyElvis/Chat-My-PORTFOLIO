var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+254746346984'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>0746346984</label></div> </a> <a href='mailto:kipkemoilvs@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/DynastyElvis'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.link/okvgo3'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/vinayak_09jhkj'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/vinayak_patil_09'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/vinayak-patil-793bb5206/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Kipkemoi Elvis Resume.pdf</label></div><a href='assets/2022 Resume Kipkemoi Elvis Rono.pdf' download='2022 Resume Kipkemoi Elvis Rono.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/place/Moringa+School/@-1.3004862,36.782418,17z/data=!4m5!3m4!1s0x182f1a6bf7445dc1:0x940b62a3c8efde4c!8m2!3d-1.3004862!4d36.7846067' class='map'></iframe></div><label class='add'><address>MQXM+QRP, 'Ngong Lane Plaza'<br>Moringa School<br>Ngong' Road<br>Nairobi, KENYA</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Kipkemoi Elvis</a>.</span><br><br>I am a Software Engineering student at <span class='bold'>Moringa School 👨🏻‍💻📚</span><br><br> I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the Computing sphere.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I'm a Full-Stack Software Developer with broad expertise in Cybersecurity, IoT and Cloud Computing <br><br>Elvis is well conversant in the following fields:<br><span class='bold'>MS Azure DevOps<br>CCNA- Networking & Automation<br>AWS Data Analytics<br>Google Data Analytics<br>Internet of Things<br>css,html,C,Java,Pyhon<br>UX/UI Design<br>CCNA Datacom</span><br><br>I've experince in the following frameworks :<span class='bold'><br>Laravel Framework<br>Flutter<br>ReactJs<br>Angular<br>Django/Flask<br></span><br><br>I use <span class='bold'>Arch Linux</span> as daily driver on my Lenovo L450 Intel® Core™ i7 Processor Intel<br>OS:Arch Linux<br>DE:Gnome(More often) Kde(often)<br>Favourite IDE:VSCode</span>");
            break;

        case "education":
            sendTextMessage("Moringa School- 2022 Jan to Date<br><br>Maseno University Main Campus<br>Passing Year : 2022<br><br>Equator Institute of Technology<br>Laravel Framework Software Dev<br>Passing Year:2022<br><br>eMobillis Institute<br>Full-stack Software Development<br>Passing Year:2022<br><br>Mathematics for Computer Science<br>Univ. of London, Coursera<br><br>AWS Machine Learning Fundamentals<br>Udacity<br><br>Software Security<br>Univ. of Maryland, Coursera<br><br>Data Scientist's Toolbox<br>Coursera<br><br>Modern Python Programming Essentials<br>AWS<br><br>Artificial Intelligence and Machine Learning<br>Techmindset Africa AI<br><br>Internet of Things (IoT)<br>Strathmore University<br><br>Menengai High School<br>KCSE Certification");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https:\/\/instagram.com/vinayak_patil_09/'><span class='bold'>Vinayak Patil</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/DynastyElvis'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
