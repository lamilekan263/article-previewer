const shareBtn = document.querySelector('.share-btn')

const articleFooter = document.querySelector('.article-share-footer')

const shakingFooter = document.querySelector('.article-preview-profile')


const secondBtn = document.querySelector(".second-btn")
console.log(shakingFooter)




shareBtn.addEventListener("click",  ()=>{
    if(articleFooter.classList.contains("close")){
        shakingFooter.style.display = "none"
        articleFooter.classList.remove("close")
    }
    return ;
})

secondBtn.addEventListener("click",  ()=>{
    if(articleFooter.classList !==("close")){
        shakingFooter.style.display = "flex"
        articleFooter.classList.add("close")
    }
    return ;
})

