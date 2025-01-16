


setTimeout(function() {
    console.log(1); // viec1
    setTimeout(function() {
        console.log(2); // viec2
        setTimeout(function() {
            console.log(3); // viec3
            setTimeout(function() {
                console.log(4); // viec4
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
