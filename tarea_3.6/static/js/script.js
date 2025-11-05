const video = '<video width="720" height="400" controls autoplay src="resources/videos/PREMEDITATED (Full Combo) - FNF Myths of Yamaha.mp4" class="video" id="main"></video>'
const video2 = '<video width="720" height="400" controls autoplay src="resources/videos/SELF-PACED (feat. @DJAwesomeYT) - The Pace Collection OST.mp4" class="video" id="main"></video>'
const video3 = '<video width="720" height="400" controls autoplay src="resources/videos/[WotG] ENNWAY ft. Heart Plus Up! - TWISTED GARDEN (Nameless Deity).mp4" class="video" id="main"></video>'
const video4= '<video width="720" height="400" controls autoplay src="resources/videos/Sans and Papyrus Song (Remastered) - An Undertale Rap by JT Music  To The Bone.mp4" class="video" id="main"></video>'
const video5 = '<video width="720" height="400" controls autoplay src="resources/videos/HYPERLINK [Deltarune Spamton Animation].mp4" class="video"></video>'


function play(element) {
    document.getElementById('main').remove();
    document.getElementById('video-container').innerHTML = video;
}

function play2(element) {
    document.getElementById('main').remove();
    document.getElementById('video-container').innerHTML = video2;
}

function play3(element) {
    document.getElementById('main').remove();
    document.getElementById('video-container').innerHTML = video3;
}

function play4(element) {
    document.getElementById('main').remove();
    document.getElementById('video-container').innerHTML = video4;
}

/* ------------------------------------------------------------------------------------------------------ */
function hover1(element) {
    let img = element.querySelector('img');
    let span = element.querySelector('span');
    img.remove();
    span.remove();
    document.getElementById('cont').innerHTML = '<video width="150" height="115" autoplay src="resources/videos/PREMEDITATED (Full Combo) - FNF Myths of Yamaha.mp4" class="vid-s"></video> <span class="video-title">PREMEDITATED: Myths of Yamaha</span>';
}

function out1(element) {
    let video = element.querySelector('video');
    let span = element.querySelector('span');
    video.remove();
    span.remove();
    element.innerHTML = '<img src="resources/img/ZWzXbVEC8fU_1280x720.jpg" class="vid-s" id="video"> <span class="video-title">PREMEDITATED: Myths of Yamaha</span>';
}

function hover2(element) {
    let img = element.querySelector('img');
    let span = element.querySelector('span');
    img.remove();
    span.remove();
    element.innerHTML = '<video width="150" height="115" autoplay src="resources/videos/SELF-PACED (feat. @DJAwesomeYT) - The Pace Collection OST.mp4" class="vid-s"></video> <span class="video-title">SELF-PACED - The Pace Collection OST</span>';
}

function out2(element) {
    let video = element.querySelector('video');
    let span = element.querySelector('span');
    video.remove();
    span.remove();
    element.innerHTML = '<img src="resources/img/o-G3k26ZeK0_1280x720.jpg" class="vid-s" id="video"> <span class="video-title">SELF-PACED - The Pace Collection OST</span>';
}

function hover3(element) {
    let img = element.querySelector('img');
    let span = element.querySelector('span');
    img.remove();
    span.remove();
    element.innerHTML = '<video width="150" height="115" autoplay src="resources/videos/[WotG] ENNWAY ft. Heart Plus Up! - TWISTED GARDEN (Nameless Deity).mp4" class="vid-s"></video> <span class="video-title">TWISTED GARDEN (Nameless Deity)</span>';
}

function out3(element) {
    let video = element.querySelector('video');
    let span = element.querySelector('span');
    video.remove();
    span.remove();
    element.innerHTML = '<img src="resources/img/3bIy-eaLmKc_1280x720.jpg" class="vid-s" id="video"> <span class="video-title">TWISTED GARDEN (Nameless Deity)</span>';
}

function hover4(element) {
    let img = element.querySelector('img');
    let span = element.querySelector('span');
    img.remove();
    span.remove();
    element.innerHTML = '<video width="150" height="115" autoplay src="resources/videos/Sans and Papyrus Song (Remastered) - An Undertale Rap by JT Music  To The Bone.mp4" class="vid-s"></video> <span class="video-title">An Undertale Rap by JT Music "To The Bone"</span>';
}

function out4(element) {
    let video = element.querySelector('video');
    let span = element.querySelector('span');
    video.remove();
    span.remove();
    element.innerHTML = '<img src="resources/img/cWSvI3F5kdQ_1280x720.jpg" class="vid-s" id="video"> <span class="video-title">An Undertale Rap by JT Music "To The Bone"</span>';
}