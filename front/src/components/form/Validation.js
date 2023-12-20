
const Validation =(userData)=>{
    let errors={}

    if(!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ .test(userData.email)){
        errors.email = 'tiene que ser un Email';
    }
    if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(userData.password)){
        errors.password='La contraseña debe tener al entre 8 y 16 caracteres'
    }
    
    return errors
    

}
export default Validation;