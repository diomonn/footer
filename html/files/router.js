(function() {
    const navigation = ['./cantact.html',
        './achievement.html', './experinence.html',
        './gallery.html', './recommendations.html', './resume.html',
        './skill.html',
    ]

    function route(a) {
        window.location.href = a;
    }
    const NS = document.querySelectorAll('button')
    const H1 = document.querySelector('.one .text .a')
    console.log(H1);
    H1.onclick = function() {
        window.location.href = './home.html';
    }
    for (let i = 0; i < 7; i++) {
        NS[i].onclick = function() {
            route(navigation[i])
        }

    }

})()