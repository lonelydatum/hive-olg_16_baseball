

TweenLite.defaultEase = Power2.easeInOut
function start() {
	
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	tl.set('#legalBtn', {display: 'none'})
	
	tl.from('.hero', .9, {opacity: .5, scale:.8})

	tl.add("f1", '-=.1')
	tl.from('.t1', .3, {opacity: 0, x:'-=50'}, 'f1')
	// tl.from('.logos', .3, {opacity: 0, scale:'-=50'}, 'f1')
	tl.from('.logos', .3, {scale:1.3, opacity:0}, "+=.3")
	

	tl.add("f2", '+=1.3')
	tl.to('.t1', .3, {opacity: 0, x:'+=50'}, 'f2')
	tl.from('.t2', .3, {opacity: 0, x:'-=50'}, 'f2')

	tl.add("end", '+=.5')
	tl.from([".footer", ".odds"], .3, {opacity:0}, 'end')
	tl.set('#legalBtn', {display: 'block'})
}

start()

module.exports = {};

