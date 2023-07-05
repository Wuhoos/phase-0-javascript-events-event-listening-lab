const input = document.getElementById('button');

function addingEventListener() {
    function clickAlert() {
    alert('I was Clicked'); 
}
    input.addEventListener('click', clickAlert);
}
