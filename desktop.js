/*
//15.11.2021. Pon. 
//handle setupevents as quickly as possible
 const setupEvents = require('./installers/setupEvents')
 if (setupEvents.handleSquirrelEvent()) {
    // squirrel event handled and app will exit in 1000ms, so don't do anything else
    return;
 }

const electron = require('electron')
// Module to control application life.
const app = electron.app
const {ipcMain} = require('electron')
var path = require('path')
*/

/*
30.6.2021. Sre.
Kod za realizaciju Electron.js cross-platform desktop aplikacije... 
Aužuriranje:
6.8.2021. Pet. 
*/

const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

//SET ENV
process.env.NODE_ENV = 'production';

let mainWindow;

//Čeka trenutak kada je aplikacija spremna

app.on('ready', function(){
//Kreiranje novog prozora

mainWindow = new BrowserWindow({icon: __dirname + '/assets/icons/win/icon.ico', width: 760, height: 720}); 
//Učitavanje html fajla u prozoru
mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'slika.html'),
    protocol: 'file:', 
    slashes: true
})); //datoteka://ime_direktorijuma/slika.html
});