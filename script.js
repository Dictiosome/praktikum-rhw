// var a='sigma'; b='skibibi';
// alert (a) 

// var nama = prompt(`Nama`); usia = prompt(`Usia anda`); 
// console.log(`Nama anda ${nama}, usia anda ${usia}`);

// if(usia >= 18){
//     alert(`Welcome`)
// } else{
//     alert(`pergi minor`)
// }

// var angka = prompt(`Masukkan angka`);
// if (angka %2 == 0){
//     alert (`Genap`)
// }   else{
//     alert (`Ganjil`)
// }

// var ulang = true;
// while (ulang) {
//     console.log(`Halo minor`);
//     ulang = confirm (`Lagi?`);
// }

// var n = prompt(`Berapa nilai anda??`);

// if (n>=85) {
//     alert(`Nilai anda A!`);
// } else if (n>=70) {
//     alert(`Nilai anda B`);
// } else if (n>=55) {
//     alert(`Nilai anda C...`);
// } else {
//     alert(`Ach, belajar sana`);
// }

var n = prompt(`Hari apa?`);
hari = "";

switch(n){
    case "1":
    hari = "Senin"
    break;
    case "2":
    hari = "Selasa"
    break;
    case "3":
    hari = "Rabu"
    break;
    case "4":
    hari = "Kamis"
    break;
    case "5":
    hari = "Jumat"
    break;
    case "6":
    hari = "Sabtu"
    break;
    case "7":
    hari = "Minggu"
    break;
    default:
        console.log(`Tidak valid`)
}   if(hari === ""){
    alert(`Hari ini misterius`);
}   else {
    alert(`Hari ini hari ${hari}`)
}
