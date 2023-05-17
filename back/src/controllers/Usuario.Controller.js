const Usuario= require('../models/Usuario.Model')

//Get all users
exports.get_all_users = async (req, res) => {

    Usuario.find({}, (err,result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
}
exports.create_user = async (req, res) => {

    let {
        idCliente,
        nombre,
        apellido,
        email,
        telefono,
        password,
        tipoUsuario,
        aprobador,
        verificadorWA
    } = req.body 

    try{
        let usuario = new Usuario({
            idCliente,
            nombre,
            apellido,
            email,
            telefono,
            password,
            tipoUsuario,
            aprobador,
            verificadorWA
        })
       let createdUser = await usuario.save() 
       res.status(201).json({
        status : 'Success',
        data : {
            createdUser
        }
    })
    }catch(err){
        console.log(err)
    }
}
exports.update_user = async(req, res) => {

        
    try{
        const updatedUser = await Usuario.findByIdAndUpdate(req.params.id,req.body,{
            new : true,
            runValidators : true
        })
        
        res.status(200).json({
            status : 'Success',
            data : {
              updatedUser
            }
        })
    }catch(err){
        console.log(err)
    }
}
exports.delete_user = async(req, res) => {

    const id = req.params.id
    await Usuario.findByIdAndRemove(id).exec()
    res.send('Deleted')

}