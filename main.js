//all elemants


const username =document.querySelector("#username");
const email =document.querySelector("#email");
const password =document.querySelector("#password");
const confirmPassword =document.querySelector("#confirmPassword");
const form =document.querySelector("#form")

     const showError = (input,massage) => {
         
     let parentElement = input.parentElement;
     parentElement.classList = 'form-control error'; 
     const small = parentelement.querySelector("small")
     const successIcon = parentElement.queryselectorAll("i")
     [0];
     const errorIcon = parentElement.queryselectorAll("i")
     [1];
     
     errorIcon.style.visibility = 'visible';
     successIcon.style.visibility = 'hidden';
     small.innerText = massage;
     
       
     }
     
     const showSuccess = (input) => {
         
     let parentElement = input.parentElement;
     parentElement.classList = 'form-control success'; 
     const successIcon = parentElement.queryselectorAll("i")
     [0];
     const errorIcon = parentElement.queryselectorAll("i")
     [1];
     errorIcon.style.visibility = 'hidden';
     successIcon.style.visibility = 'visible';
     

const ckeckEmpty = (elements) =>{
    
    elemants.forEach( (elemant) =>{
    if (element.value ==='') { 
      showError(element,'input required');
    }else{
        showSUCESS(element);
    }
    });
}

form.addEventListener("#submit",(event)=>{
    
    event.preventDefault();
   
   checkEmpty( [username,email,password,confirmPassword]);
})
