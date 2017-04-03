// plik scripts.js

function rysujChoinke(x) {
	
	for (var y = 0 ; y < x ; y++) {
			var star = '*';
		
		for (var z = 0 ; z < y*2-1 ; z++) {
				star += '*';
		}
		console.log(star)
	}		
}

rysujChoinke(5);

//nie mam pomysłu tylko jak dodać spację do każdego poziomu
//żeby wyprostować choinkę:)