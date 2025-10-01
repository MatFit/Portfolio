var edit_command = "";
var speech_index = 1;

function edit(ev, command) {
  // Prevent the default double-click text selection and clear any existing selection
  modal.classList.add("active");
  edit_command = command;
  modal_header.innerHTML = command + ".html";
  modal_text.value = COMMANDS[command].join("\r\n");
}

function exit() {
  COMMANDS[edit_command] = modal_text.value.split(/\r?\n/);
  modal.classList.remove("active");
}

function allowDrop(ev) {
  if (ev.target.childElementCount == 0) ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.parentNode.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function showTime() {
  var date = new Date();
  document.getElementById("time").innerHTML = date.toLocaleTimeString([], {
    timeStyle: "short",
  });
}


function gifText() {
    var div = document.getElementById("bubble");
    var img = document.querySelector("img[alt='snail']");
    var tmp = speech_index++ % SNAIL_SPEECH.length;
    console.log(speech_index);

    div.innerHTML = SNAIL_SPEECH[tmp];

    if (tmp === SNAIL_SPEECH.length - 1) {
        img.src = "static/tv-time-2.gif";
    }
    else if (tmp === 0) {
        img.src = "static/tv-time.gif";
    }
}