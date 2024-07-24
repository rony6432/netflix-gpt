 const Validation=(email,pass)=>{
    const valide=/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)
    const validp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass)
  if(!valide) return "Email Not Valid"
  if(!validp) return "Password Not Valid"
  return null
}
 export default Validation