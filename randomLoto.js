let result = [];
function R() {
    result = [];



    for (let i = 0; i < 20; i++) {
        let ri = randomInteger()
        result.push(ri);

    }
    console.log(result);

    let res = '';
    for (let i = 0; i < result.length; i++) {
        res += '<div class="block" id="' + (i + 1) + '">' + result[i] + '</div>';
    }
    // console.log(res)

    document.querySelector('#card').innerHTML = res;
    // document.querySelector('#out-input').value = result;
    return result;
}



function randomInteger() {
    var rand = 1 - 0.5 + Math.random() * (99 - 1 + 1);
    rand = Math.round(rand);

    if (result.find(el => el == rand)) {
        rand = randomInteger()
    }
    return rand;

}

R();