$("#nextMotor1").click(function () {
	db.ref().update({ 'motor1/run': 1 })
	db.ref().update({ 'motor1/steps': 10500 })
	db.ref().update({ 'motor1/dir': 0 })
});
$("#backMotor1").click(function () {
	db.ref().update({ 'motor1/run': 1 })
	db.ref().update({ 'motor1/steps': 10500 })
	db.ref().update({ 'motor1/dir': 1 })

});
$("#nextMotor2").click(function () {
	db.ref().update({ 'motor2/steps': 2500 })
	db.ref().update({ 'motor2/dir': 0 })
	db.ref().update({ 'motor2/run': 1 })
});
$("#backMotor2").click(function () {
	db.ref().update({ 'motor2/steps': 2500 })
	db.ref().update({ 'motor2/dir': 1 })
	db.ref().update({ 'motor2/run': 1 })

});

$("#bothMotor2").click(function () {

	db.ref().update({ 'motor2/steps': 2500 })
	db.ref().update({ 'motor2/dir': 0 })
	db.ref().update({ 'motor2/run': 1 })

	var ms  = 100
	var start = Date.now(),
		now = start;
	while (now - start < ms) {
		now = Date.now();
	}
	back()
	var once = false;

	function back() {
		firebase.database().ref('motor2/run').on('value', (snapshot) => {
			let data = snapshot.val();
			if (data == 0) {
				if (!once){
					once = true
					db.ref().update({ 'motor2/steps': 2500 })
					db.ref().update({ 'motor2/dir': 1 })
					db.ref().update({ 'motor2/run': 1 })
				}
			}
		});
	}
})

