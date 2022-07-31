window.onload = function() {
    let dots = document.getElementsByClassName('theme-dot');
    let themeLink = document.getElementById('theme-style');

    console.log("hi" + dots.length)

    for(var i=0; i<dots.length; i++) {
        dots[i].addEventListener('click', function() {
            let mode = this.dataset.mode
            setTheme(mode)
        })
    }
   
    function setTheme(mode) {
        localStorage.setItem('theme', mode)

        var themeName = 'themes/' + mode + ".css"
        themeLink.href = themeName
    }

    let curTheme = localStorage.getItem('theme');
    if(curTheme != null) {
        setTheme(curTheme)
    } 
};