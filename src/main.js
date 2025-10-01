var terminal = document.getElementById("terminal");
var pastCommands = document.getElementById("past_commands");
var command = document.getElementById("typer");
var textArea = document.getElementById("texter");
var liner = document.getElementById("liner");
var cursor = document.getElementById("cursor");

var modal = document.getElementById("modal");
var modal_text = document.getElementById("modal_text");
var modal_header = document.getElementById("modal-filename");

function load_style() {
  page_style = localStorage.getItem("page_stylesheet_name");
  // Default to terminal
  if (page_style === null) {
    page_style = "styles/terminal.css";
  }
  document.getElementById("page_style").setAttribute("href", page_style);
}
function style_terminal() {
  localStorage.setItem("page_stylesheet_name", "styles/terminal.css");
  load_style();
}
function style_gui() {
  localStorage.setItem("page_stylesheet_name", "styles/gui.css");
  load_style();
}

setInterval(showTime, 1000);

// When the page loads
// Window onload ensures that functions like handleCommand are defined
// before they are called
window.onload = () => {
  cursor.style.left = "0px";
  textArea.focus();
  console.log("test2");
  handleCommand("intro");
};
window.onclick = () => textArea.focus();
window.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        var c = textArea.value.trim();

        if (c !== "") commands = [...commands, c];
        command_index = commands.length;

        printLine(c, "past-command");
        handleCommand(c);

        cursor.style.left = "0px";
        command.innerHTML = "";
        textArea.value = "";
    }
    else if (e.key === "ArrowUp" && command_index > 0) {
        command_index -= 1;
        textArea.value = commands[command_index];
        command.innerHTML = commands[command_index];
        cursor.style.left = "0px";
    }
    else if (e.key === "ArrowDown") {
        if (command_index + 1 < commands.length) {
            command_index += 1;
            textArea.value = commands[command_index];
            command.innerHTML = commands[command_index];
        } else {
            textArea.value = "";
            command.innerHTML = "";
        }
        cursor.style.left = "0px";
    }
});

textArea.addEventListener("keydown", (e) => {
    // Prone to script heriarchy in index.html
    write();

    var count = textArea.value.length;

    if (e.key === "ArrowLeft") {
    cursor.style.left =
    Math.max(parseInt(cursor.style.left) - mv, -count * mv) + "px";
    } 
    else if (e.key === "ArrowRight") {
    cursor.style.left = Math.min(parseInt(cursor.style.left) + mv, 0) + "px";
    }

});


textArea.addEventListener("keypress", write);
textArea.addEventListener("keyup", write);