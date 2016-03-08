window.addEventListener('load', function() {
	//stran nalozena
		
	
		
	var izvediPrijavo = function (event){
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = uporabnik;
		document.querySelector(".pokrivalo").style.visibility ="hidden";
	}
		
	var dodajOpomnik = function (event){
		var naziv, cas;
		
		naziv = document.querySelector("#naziv_opomnika").value;
		cas = document.querySelector("#cas_opomnika").value;
		
		document.querySelector("#naziv_opomnika").value = "";
		document.querySelector("#cas_opomnika").value = "";
		
		var vrstica = document.createElement("div");
		vrstica.className="opomnik senca rob";
		vrstica.innerHTML="<div class='naziv_opomnika'>"+naziv+"</div><div class='cas_opomnika'> Opomnik čez <span>"+cas+"</span> sekund.</div>";
		document.querySelector("#opomniki").appendChild(vrstica);
		
	}
		
	document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo);
	document.querySelector("#dodajGumb").addEventListener('click', dodajOpomnik);
	
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (var i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
			cas--;
			casovnik.innerHTML = cas;
			if(cas<=0){
				var naziv = document.querySelector(".naziv_opomnika").innerHTML;
				var izbris = document.getElementsByClassName("opomnik");
				alert("Opomnik! \n\nZadolžitev "+  naziv +" je potekla!");
				izbris[i].parentNode.removeChild(izbris[i]);
			}
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});