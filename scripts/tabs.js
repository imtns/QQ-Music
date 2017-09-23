(function () {
    document.addEventListener('click', e => {
        let target = e.target;
        if (target.dataset.role != 'tab') return;
        
        [].forEach.call(target.parentElement.children, tabs => {
            tabs.classList.remove('active');
        });
        target.classList.add('active');
        Array.from(document.querySelector('.content').children).forEach(child=>{
            child.classList.add('hide');
            if(target.dataset.view == child.id)
                child.classList.remove('hide');  
        });
    });
})()