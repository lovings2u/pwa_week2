var input = document.getElementById("input");
var btn_trans = document.getElementById("translate");
var result_area = document.getElementById("result");

btn_trans.addEventListener("click", function(e) {
    e.preventDefault();
    var result = translate(input.value);
    result_area.innerHTML = "<p>" + result + "</p>";
})

function translate(str) {
    return str.split('').map(function(char) {
        var d = Hangul.d(char);
        if(d[3] && Hangul.isVowel(d[1]) && Hangul.isVowel(d[2])) {
            var tmp = d[3];
            d[3] = d[2];
            d[2] = tmp;
        }
        return Hangul.a(d);
    }).join('');
}