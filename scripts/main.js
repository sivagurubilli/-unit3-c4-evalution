 var url ="https://shrouded-earth-23381.herokuapp.com/api/headlines/india"


async function apicall(){
try{
    var res = await fetch(url)
    var data = res.json()
    
}catch(err){
    console.log(err)
}

}


function appenddata(data,parent){
data.forEach (elem=>{

var div = document.createElement("div")
div.id ="div"
var image =  document.createElement("img")
image.setAttribute("src",elem.urlToImage)
image.id ="image"
var div1 = document.createElement("div")
div1.id ="div1"
div1.innerHTML=elem.title
var div2 = document.createElement("div")
div2.id ="div2"
div2.innerHTML= elem.description
div.append(image,div1,div2)
parent.append(div)
var arr =[]
div.addEventListener("click",news);
    function news(elem){
        console.log(image)
        window.location.href="news.html"
arr.push(elem)
    localStorage.setItem("disc:",JSON.stringify(arr))
    
    }

})

}
export {apicall,appenddata}