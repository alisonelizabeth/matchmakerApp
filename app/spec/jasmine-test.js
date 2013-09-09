describe('returns an object that', function(){
	it('damages another fighter with kick', function(){
		var threeHP = threeFighter.hp
		var oneDamage = oneFighter.damage

		oneFighter.kick(threeFighter)

		expect(threeFighter.hp).toBe(threeHP - 120)

		});
	});