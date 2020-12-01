//Dom values 
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader')
//let create some array for photos
let photoArray = [];
//Api Key Dont miss use this api key 
const ApiKey ='PlS0hDxVMgjNsQblE2DBUZAEDeF13QQIVWpo2TnemOE'; 
//Number of images 
const count= 10;
//Url for unsplash Api
const urlApi = `https://api.unsplash.com/photos/random?client_id=${ApiKey}&count=${count}`

//This function will create setAttributes for the elements in display photos function
function setAttributes(element,arr){
    for (const key  in arr){
        element.setAttribute(key,arr[key]);
      
    }

}
//This function will display the photos

function displayPhotos(){
    photoArray.forEach((photo)=>{
        const item = document.createElement('a')
        setAttributes(item,{
            href: photo.links.html,
            target:'_blank',
        });
        const img = document.createElement('img')
        setAttributes(img,{
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })
        item.appendChild(img);  
        imageContainer.appendChild(item);
       
    })
}


async function getPhoto(){
    try{
    const resp = await fetch(urlApi);
    photoArray = await resp.json()
   
    displayPhotos()
    }catch(error){
        //This will threo error
    }

}
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
      getPhoto();
  
    }
  });

//Onloading
getPhoto()