# Backhoe

Backhoe is a command-line tool used in conjunction with [OpenVNCScraper](https://github.com/JordanCodingGod/OpenVNCScraper) and [VNCDozer](https://github.com/JrdBrd/VNCDozer). It takes the scraped IPs/passwords and loads them into [VNC Viewer](https://www.realvnc.com/connect/download/viewer).

## Installation

To install Backhoe, you need [Node.js](https://nodejs.org) installed.

Simply run `npm install LoganMD/backhoe -g`

## Command Usage

It's as easy as running `backhoe iplist.txt`. Of course, `iplist.txt` would be the .txt file that your list of IPs is. If it cannot find the directory where VNC Viewer's configuration files are , it will save the .vnc files to the directory your command line is.

At the moment, Backhoe only supports Windows. However, Linux and Mac support may be added in the future, and if you want to take a crack at it, be my guest.
