

TweenLite.defaultEase = Power2.easeInOut
function start() {

	const tlShake = new TimelineMax({repeat:3, yoyo:true})
	tlShake.to('.hero', .05, {x:'-=3'})	
	
	
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	tl.set('#legalBtn', {display: 'none'})
	tl.from('.hero', .9, {opacity: .5, scale:.8})
	
	tl.staggerFrom('#text1 img', .3, {x:'+=50', opacity:0}, .1, .7)
	tl.from('.logos', .3, {scale:1.3, opacity:0}, "+=.3")

	tl.add(tlShake, 'shake-=.07')

	tl.staggerTo('#text1 img', .2, {x:'-=20', opacity:0}, .1, '+=2')
	

	tl.add('t2')
	tl.staggerFrom('#text2 img', .3, {x:'+=50', opacity:0}, .1, 't2-=.33')
	


	tl.add("end", '+=.5')
	tl.from([".footer", ".odds"], .3, {opacity:0}, 'end')
	tl.set('#legalBtn', {display: 'block'})
}

start()

module.exports = {};

