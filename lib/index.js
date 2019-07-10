const uuidv4 = require('uuid/v4');
const fs = require("fs")
const template = fs.readFileSync(__dirname + "/template.txt")
const os = require("os")
var location;
backhoe = function() {
  console.log(fs.readFileSync(__dirname + "/logo.txt").toString())
  if (fs.existsSync('C:/Users/' + os.userInfo().username + '/AppData/Roaming/RealVNC/ViewerStore') === false) {
    console.error("Error: The ViewerStore directory does not exist, saving .vnc files to same directory.")
    location = ""
  } else {
    location = 'C:/Users/' + os.userInfo().username + '/AppData/Roaming/RealVNC/ViewerStore/'
  }
  var file = [process.argv[0], process.argv[1], process.argv[2]].find(function(name) {
    if (typeof name === "string") {
      if (name.includes(".txt")) return name
    }
  })
  if (typeof file === "undefined" || typeof file === "null") {
    console.error("Error: Please specify a .txt file to be loaded into VNC Viewer.");
    process.exit();
  }
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

exports.run = backhoe
