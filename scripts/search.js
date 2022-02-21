 url ='https://shrouded-earth-23381.herokuapp.com/api/search/?q=<search_term>'
 
 search_term =localStorage.getItem("search_term")
 async function search(){
     try{
var res= await fetch(url)
var data = await res.json()
  }catch(err){
      console.log(err)
  }
Input.addEventListener("keypress",(e)=>{
if(e.key=="Enter"){

}
})

}



export {search}