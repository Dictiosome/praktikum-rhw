// var uname = prompt(`Input username`).toLowerCase();

//     if (uname === `admin`) {
//     pw = prompt(`Input password`);
//     pw = parseFloat(pw);
//         if (pw === 12345) {
//             alert(`Welcome`);
//         } else {
//             alert(`Wrong password`);
//         }
//     } else {
//         alert(`Saha maneh??`);
//     }

// let string = "";
// for(let i = 0; i < 5; i++) {
//     for(let j = 5; j > i; j--) {
//         string += "*";
//     }   string += "\n";
// }   console.log(string)

// var name = prompt(`Masukkan nama`);
// function sayHello(name){
//     return `halo ${name}`;
// }
// alert(sayHello(name));

// var sisi = prompt(`Panjang sisi`);
// function persegi(sisi){
//     return sisi * sisi;
// }
// alert(persegi(sisi));

// var sisi = prompt(`Panjang sisi`);
//     panjang = prompt(`Panjang panjang`);
// function persegi(sisi, panjang){
//     return sisi * panjang;
// }
// alert(persegi(sisi, panjang));

// var alas = prompt(`Alas`);
//     tinggi = prompt(`Tinggi`);
// function segitiga(alas, tinggi){
//     return (alas * tinggi)/2;
// }
// alert(segitiga(alas, tinggi));

var r = prompt(`Radius`);
function buled(r){
    return 3.14 * r * r;
}
alert(buled(r));