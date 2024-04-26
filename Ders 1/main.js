const pElement = document.getElementById('kadi')

function girisKontrol1(event){
    event.preventDefault()
    pElement.style.borderRadius = "10px"


    pElement.classList.add('deneme1')
    pElement.classList.add('deneme2')

    
    const kadi = document.forms["kayit"]["kadi"].value
    const sifre = document.forms["kayit"]["sifre"].value
    
    console.log(kadi + " " + sifre)
    /*  
    if(kadi == "memo" && sifre == "can"){
        alert("giris basarili")
    }else {
        alert("lutfen bilgileri kontrol ediniz")
    }
    */
}

/*
Kullanici giris sayfasinda
ad, kullanici adi, mail, sifre ve sifre tekrari bulunmaktadır
herhangi bir tanesi bos olamaz, sifre ve sifre tekrari da
ayni olmak zorunda. Bu sartlar saglanirsa ekrana
"kayit basarili", saglanmazsa "hata sebebini yazan" bir js 
kodu yaziniz. 
*/

function girisKontrol1(event) {
    event.preventDefault();
  
    const sifre1 = document.forms["kaydimiz"]["sifre1"].value;
    const sifreTekrari = document.forms["kaydimiz"]["sifreTekrari"].value;
  
    if (sifre1 == sifreTekrari) {
      alert("giris basarili");
    } else {
      alert("lutfen bilgileri kontrol ediniz");
    }
}

/* BOM ->   Browser Object Model */
console.log(window.innerWidth) //en
console.log(window.innerHeight) //boy

console.log(screen.availHeight) //en
console.log(screen.availWidth) //boy

pElement.addEventListener('click',()=>{
     window.open("second.html") // bos veya belirtilen sayfayi acar
    //moveTo x ve y ekraninda kaydirma yapar
    //resizeTo ekrani yeniden boyutlandirir 
})

console.log(window.location.href) //href
console.log(window.location.host) //host
console.log(window.location.hostname) //host
console.log(window.location.pathname) //pathname
console.log(window.location.protocol) //pathname
console.log(window.location.port) //pathname
/*window.location.assign("second.html") */

window.history.forward()//ileriye dogru sarar
