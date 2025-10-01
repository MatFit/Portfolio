var commands = [];
var command_index = 0;


function setTheme(theme) {
    if (!theme) return;
    theme = theme.toLowerCase();

    const themes = {
        light: {
            '--text-color': '#222831',
            '--bg-color': '#f5f6fa',
            '--second-color': '#eb04df',
            '--accent-glow': '#eb04df44',
        },
        dark: {
            '--text-color': '#39ff14',
            '--bg-color': '#000000ff',
            '--second-color': '#fc1919',
            '--accent-glow': '#fc191944',
        },
    };

    const vars = themes[theme];
    if (!vars) {
        printLine('Unknown theme: ' + theme, '');
        return;
    }
    
    // Iterate over the CSS variables and set them up
    Object.keys(vars).forEach((k) => {
        document.documentElement.style.setProperty(k, vars[k]);
    });

    localStorage.setItem('theme', theme);
    printLine('theme set to ' + theme, '');
}


function printLine(text, style) {
  var t = "";

  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }

  setTimeout(() => {
    var next = document.createElement("p");
    next.className = style;
    next.innerHTML = t;

    pastCommands.parentNode.insertBefore(next, pastCommands);
    window.scrollTo(0, document.body.offsetHeight);
  }, 100);
}

function printLines(cmd, style) {
  cmd.forEach((line) => {
    printLine(line, style);
  });
}

function handleCommand(c) {
    console.log("test1");
    c = c.toLowerCase();

    switch (c) {
        case "":
            break;
    case "light":
      setTheme('light');
      break;
    case "dark":
      setTheme('dark');
      break;
        // Head over to desktop gui
        case "quit":
            style_gui();
            break;
        // Clear terminal
        case "clear":
            setTimeout(() => {
                // Clear terminal html contents
                terminal.innerHTML = '<a id="past_commands"></a>';
                // Set pastcommands to empty w/ empty terminal
                pastCommands = document.getElementById("past_commands");
            }, 100);
            break;
        case "email":
            setTimeout(() => {
            mail();
            }, 500);
            break;
        default:
            var msg = COMMANDS.fail;
            if (c in COMMANDS) {
            msg = COMMANDS[c];
            }
            printLines(msg, "");
    }
}

const mv = 7.5;
const write = () => (command.innerHTML = textArea.value.replace(/\n/g, ""));

function mail() {
  window.open(
    "mailto:mafi7060@colorado.edu?subject=Your Splendid",
    "_blank",
    "scrollbars=yes,resizable=yes,width=10,height=10"
  , '_top');
}