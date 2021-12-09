var btnOpen=document.querySelector(".open-modal");
var modal=document.querySelector(".modal");
var btnClose=document.querySelector(".modal__footer button");
var iconClose=document.querySelector(".modal__header i");

function OpenModal(e){
    console.log(e.target);
    modal.classList.toggle('hide');
}

btnOpen.addEventListener('click',OpenModal);
btnClose.addEventListener('click',OpenModal);
iconClose.addEventListener('click',OpenModal);
modal.addEventListener('click',function(e){
    if(e.target==e.currentTarget)
        OpenModal;
});


