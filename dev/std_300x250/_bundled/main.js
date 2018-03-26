(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

TweenLite.defaultEase = Power2.easeInOut;
function start() {

	var tlShake = new TimelineMax({ repeat: 3, yoyo: true });
	tlShake.to('.hero', .05, { x: '-=3' });

	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });
	tl.set('#legalBtn', { display: 'none' });
	tl.from('.hero', .9, { opacity: .5, scale: .8 });

	tl.staggerFrom('#text1 img', .3, { x: '+=50', opacity: 0 }, .1, .7);
	tl.from('.logos', .3, { scale: 1.3, opacity: 0 }, "+=.3");

	tl.add(tlShake, 'shake-=.07');

	tl.staggerTo('#text1 img', .2, { x: '-=20', opacity: 0 }, .1, '+=2');

	tl.add('t2');
	tl.staggerFrom('#text2 img', .3, { x: '+=50', opacity: 0 }, .1, 't2-=.33');
	tl.to('#logo_proline', .3, { y: data.logoY || "+=0" }, "t2");

	tl.add("end", '+=.5');
	tl.from([".footer", ".odds"], .3, { opacity: 0 }, 'end');
	tl.set('#legalBtn', { display: 'block' });
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
