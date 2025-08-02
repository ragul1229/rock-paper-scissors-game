function fullname(firstname,lastname){
    function join(name1,name2){
        const jani=name1+" "+name2
        return jani
    }
    const jeni=join(firstname,lastname)
    return jeni
}
let getfulname=fullname("Ragul","Jayaraman")
console.log(getfulname)