console.log("script running..");
document.querySelector('.cross').style.display = 'none' ;
document.querySelector('.hambarg').addEventListener("click", ()=>{
     document.querySelector('.sidebar').classList.toggle('sidebarGo');
     if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('ham').style.display = 'none'
        setTimeout(t) => {
            document.querySelector('.cross').style.display = 'inline'
        }, 350);

        

    }
})


