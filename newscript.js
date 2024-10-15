var uname = prompt(`Input username`).toLowerCase();
    

    if (uname === `admin`) {
    pw = prompt(`Input password`);
    pw = parseFloat(pw);
        if (pw === 12345) {
            alert(`Welcome`);
        } else {
            alert(`Wrong password`);
        }
    } else {
        alert(`Saha maneh??`);
    }