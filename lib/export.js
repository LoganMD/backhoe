const uuidv4 = require('uuid/v4');
const fs = require("fs")
function
savefile (file, template, location) {
  if (fs.existsSync(file)) {
    console.log("Preparing to export files to VNC Viewer, make sure you are using a proxy on VNC Viewer.")
    fs.readFile(file, 'utf8', function(err, contents) {
      connectionArray = []
      contents = contents.split("\n")
      contents.forEach(function(c) {
        if (c !== "") {
          c1 = c.split(":")[0].replace("\r", "")
          c2 = c.split(":")[1].replace("\r", "")
          c3 = uuidv4()
          connectionArray.push([c1, c2, c3])
        }
      })
      connectionArray.forEach(function(c) {
        content = template.toString().replace("ip-template", c[0] + ":" + c[1]).replace("uuid-template", c[2])
        fs.writeFile(location + c[2] + ".vnc", content, function(err) {
          if (err) {
            return console.log(err);
          }
          console.log("Saved " + c[0]);
        });
      })
    });
  } else {
    console.error("Error: File does not exist.")
  }
}
exports.savefile = savefile
