const fs = require("fs")
const template = fs.readFileSync(__dirname + "/template.txt")
const os = require("os")
var location;
var savefile = require(__dirname + "/export.js")
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
  //save the files to the specified directory
  savefile.savefile(file, template, location)

}

exports.run = backhoe
