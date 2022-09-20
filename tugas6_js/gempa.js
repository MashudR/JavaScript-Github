class gempa{
	constructor(lokasi, skala){
		this.lokasi = lokasi;
		this.skala = skala;
	}
	dampak(){
		if (this.skala<=2) this.dampak = 'dampak tidak terasa';
		else if (this.skala>2 && this.skala <= 4) this.dampak = 'dampaknya bangunan retak2';
		else if (this.skala>4 && this.skala <= 6) this.dampak = 'dampaknya bangunan roboh';
		else if (this.skala>6) this.dampak = 'dampaknya bangunan roboh dan berpotensi tsunami';
		else this.dampak = '';
		
		return this.dampak;
	}
	infoGempa(){
		let no = 1;
		let dataG = `
		<td>${no++}</td>
		<td>${this.lokasi}</td>
		<td>${this.skala}</td>
		<td>${this.dampak()}</td>
		<br/>
		`;
		document.getElementById('tbl').innerHTML = dataG;
	}
	
}
	smr = new gempa('semarang', 3);
	sby = new gempa('surabaya', 6);
	smr.infoGempa(); 
	sby.infoGempa();