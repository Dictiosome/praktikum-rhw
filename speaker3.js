let jr = 7;
for (nr=1; nr<=jr; nr++) {
    if (nr < 4) {
        console.log(`speaker ${nr} berfungsi`);
    } else if (nr===4) {
        console.log(`speaker ${nr} sedang diperbaiki`);
    } else {
        console.log(`speaker ${nr} rusak`);
    }
}

// let jr = 10;
// for (nr=1; nr<=jr; nr++) {
//     if (nr%2 === 0) {
//         console.log(`speaker ${nr} berfungsi`);
//     } else {
//         console.log(`speaker ${nr} rusak`);
//     }
// }