const rec = document.getElementById('recommendations')

function retrieve() {
    const arr = []
    const switches = el.getElementsByClassName('onoff');
    for (let i = 0; i < switches.length; i++) {
        let swtch = switches.item(i);
        let name = swtch.name;
        let val = swtch.getElementsByTagName('input').item(0).checked;
        arr.push(val ? 1 : 0);
    }
    return arr;
}

function makeRequest() {
    const data = retrieve();
    fetch('http://localhost:5000/dieta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({data}),
        })
        .then(res => res.json())
        .catch((error) => {
            console.error('Error:', error);
        })
        .then(res=>{
        	fillResults(res)
        });
}

function fillResults(results) {
    rec.innerText = '';

    let tmp = ''
    for (let r of results) {
        let text = r.comida;
        let src = r.url;
        let t = `<div class="card" style="width: 18rem;">
                    <img src="${src}" class="card-img-top" alt="">
                    <div class="card-body">
                        <p class="card-text">${text}<p>
                    </div>
                </div>`;
        tmp += t;
    }
    rec.innerHTML = tmp;
}