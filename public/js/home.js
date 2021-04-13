const commentToggleBtns = document.querySelectorAll('.commentToggleBtn');
commentToggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const commentList = btn.parentElement.parentElement.querySelector('.comments');
        console.log(commentList);
        if(commentList.classList.contains('disappear')){
            
        }else{
            
        }
        commentList.classList.toggle('disappear');
    });
});