(function() {
    const body = document.querySelector('body')
    const Imgs = document.querySelectorAll('.imgs')
    const x = document.querySelector('.x')
    const l = document.querySelector('.l')
    const r = document.querySelector('.r')
    const box2s = document.querySelectorAll('.box2')
    const preview = document.getElementById('preview')
    const imgs = ['./html/images/img1.jpg', './html/images/img2.jpg', './html/images/img3.jpg', './html/images/img4.jpg']
    let j = 0;

    x.onclick = function() {
        console.log(1);
        NPreview()
    }
    l.onclick = function() {
        console.log(1);

        left()
    }

    r.onclick = function() {
        console.log(1);

        right()
    }
    console.log(x, l, r);
    for (let i = 0; i < Imgs.length; i++) {
        Imgs[i].onclick = function() {
            Preview(i)
        }

    }


    function Preview(i) {
        preview.children[2].src = imgs[i]
        preview.children[1].style.display = 'block'
        preview.style.display = 'flex'
        j = i;
    }

    function left() {
        preview.children[2].src = imgs[--j]

    }

    function right(i) {

        preview.children[2].src = imgs[++j]

        // preview.children[2].src = `./html/images/img${i}.jpg`

    }

    function NPreview() {
        preview.style.display = 'none'
        j = 0;

    }


})()