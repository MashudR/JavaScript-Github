function kalkulasi(){
	var frm = document.getElementById('calcForm');
	var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
	var jumlah = frm.btn_tambah.value;
	var kurang = frm.btn_kurang.value;
	var kali = frm.btn_kali.value;
	var bagi = frm.btn_bagi.value;
	var pangkat = frm.btn_pangkat.value;
	let tombol = [jumlah, kurang, kali, bagi, pangkat];
	/*let tombol;
	for (tombol of operasi){*/
		switch(tombol){
			case 'jumlah' :
				if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
				}    
				else {
					var total = a1 + a2; //rumus
					frm.hasil.value = total; //penempatan hasil 
				} 
			break;
			case 'btn_kurang' :
				if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
				}    
				else {
					var total = a1 - a2; //rumus
					frm.hasil.value = total; //penempatan hasil 
				} 
			break;
			case 'btn_kali' :
				if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
				}    
				else {
					var total = a1 * a2; //rumus
					frm.hasil.value = total; //penempatan hasil 
				} 
			break;
			case 'btn_bagi' :
				if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
				}    
				else {
					var total = a1 / a2; //rumus
					frm.hasil.value = total; //penempatan hasil 
				} 
			break;
			default :
				if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
				}    
				else {
					var total = a1 / a2; //rumus
					frm.hasil.value = total; //penempatan hasil 
				} 
			break;
		}
	/*}*/
}