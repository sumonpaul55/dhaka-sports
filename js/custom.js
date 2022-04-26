function togleClasss(){
    document.getElementById("toggleId").classList.toggle("toggle");
};

let baseBall = document.getElementById('baseball-btn');
function baseball(){
    document.getElementById('baseball').classList.add('show')
    document.getElementById('baseball').classList.remove('hide')
    // console.log(event.target)
}
// function basketball(){
//     document.getElementById('baseball').classList.add('show')
//     document.getElementById('baseball').classList.remove('hide')
// }