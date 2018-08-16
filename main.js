// Get button instance
var btnClick = document.getElementById("btnModal");
// Get Loading handler
var dvLoading = document.getElementById("dvLoading");
// Get modal instance
var btnModal = document.getElementById('dvModal');
// Get close button
var btnClose = document.getElementsByClassName('closeBtn')[0];

// add event listner for btnClick
btnClick.addEventListener('click',showModal) ;
// add event listner for close button
btnClose.addEventListener('click', closeModal);
// add event listner for outside click
window.addEventListener('click', outsideClick);

function showModal() {
    dvLoading.style.display = 'block';
    setTimeout(()=>{
        dvLoading.style.display = 'none';
        btnModal.style.display = 'block';
    },2000);
}
function closeModal(){
    btnModal.style.display = 'none';
}
function outsideClick(e){
    if(e.target.id == 'dvModal')
    {
        console.log(e.target);
        btnModal.style.display = 'none';
    }
    console.log(e.target);
}