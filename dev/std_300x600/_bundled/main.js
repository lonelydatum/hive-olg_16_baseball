(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

TweenLite.defaultEase = Power2.easeInOut;
function start() {

	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });
	tl.set('#legalBtn', { display: 'none' });

	tl.from('.hero', .9, { opacity: .5, scale: .7 });

	tl.add("f1", '-=.1');
	tl.from('.t1', .3, { opacity: 0, x: '-=50' }, 'f1');
	// tl.from('.logos', .3, {opacity: 0, scale:'-=50'}, 'f1')
	tl.from('.logos', .3, { scale: 1.3, opacity: 0 }, "+=.3");

	tl.add("f2", '+=1.3');
	tl.to('.t1', .3, { opacity: 0, x: '+=50' }, 'f2');
	tl.from('.t2', .3, { opacity: 0, x: '-=50' }, 'f2');

	tl.add("end", '+=.5');
	tl.from([".footer", ".odds"], .3, { opacity: 0 }, 'end');
	tl.set('#legalBtn', { display: 'block' });
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
