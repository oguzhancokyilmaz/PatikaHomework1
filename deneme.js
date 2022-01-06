let name = prompt("İsminizi Giriniz!")

var day = new Date().getDay()
var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
let today = days[day]

function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
    }
    
function display_ct() {
    var x = new Date()
    
    var x1 = x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
    document.getElementById('ct').innerHTML = x1 + "  " + today;
    display_c();
}

document.getElementById('welcome').innerHTML = `Merhaba ${name} ! HOŞGELDİN`;

 


// let list = document.querySelector("ul#list") 
// let yenili = document.createElement("li")

// let a = prompt("Liste elemanı gir !")

// yenili.innerHTML = a

// list.append(yenili)

// var tarih=new Date();
// 	var yil=tarih.getFullYear();
// 	var ay=tarih.getMonth();
// 	var gun=tarih.getDay();
// 	var saat=tarih.getHours();
// 	var dakika=tarih.getMinutes();
// 	var saniye=tarih.getSeconds();	
// 	document.write(gun+"/"+ay+"/"+yil+"<br>"+saat+":"+dakika+":"+saniye);

