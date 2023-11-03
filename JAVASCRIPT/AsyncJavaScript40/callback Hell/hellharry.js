function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = function () {
        console.log("completely loadedwith src:" + src);
        callback(null, src);
    }
    script.onerror = function () {
        console.log("error occurred with src:" + src);
        callback(new Error("error occurred"), src);
    }
    document.body.appendChild(script);
}
function hello(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    console.log("hello world " + src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src) {
        if (error) {
            console.log(error);
            return;
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap3.bundle.min.js", function goodmorning(error, src) {
            if (error) {
                console.log(error);
                return;
            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src) {
                if (error) {
                    console.log(error);
                    return;
                }
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap5.bundle.min.js", function goodmorning(error, src) {
                    if (error) {
                        console.log(error);
                        return;
                    }
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap6.bundle.min.js", function goodmorning(error, src) {
                        if (error) {
                            console.log(error);
                            return;
                        }
                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap7.bundle.min.js", function goodmorning(error, src) {
                            if (error) {
                                console.log(error);
                                return;
                            }
                        });
                    });
                });
            });
        });
    });
});






