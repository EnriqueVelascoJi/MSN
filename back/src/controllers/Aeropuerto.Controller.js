const Aeropuerto = require('../models/Aeropuerto.Model')

//Get all users
exports.get_all_Aeropuertos = async (req, res) => {

    Aeropuerto.find({}, (err,result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
}
exports.create_aeropuerto= async (req, res) => {

    let {
        idAeropuerto,
        nombre,
        siglas
    } = req.body 

    try{
        let aeropuerto= new Usuario({
            idAeropuerto,
            nombre,
            siglas
        })
       let createdAeropuerto = await aeropuerto.save() 
       res.status(201).json({
        status : 'Success',
        data : {
            createdAeropuerto
        }
    })
    }catch(err){
        console.log(err)
    }
}
exports.update_aeropuerto = async(req, res) => {

        
    try{
        const updatedAeropuerto = await Aeropuerto.findByIdAndUpdate(req.params.id,req.body,{
            new : true,
            runValidators : true
        })
        
        res.status(200).json({
            status : 'Success',
            data : {
              updatedAeropuerto
            }
        })
    }catch(err){
        console.log(err)
    }
}
exports.delete_aeropuerto = async(req, res) => {

    const id = req.params.id
    await Aeropuerto.findByIdAndRemove(id).exec()
    res.send('Deleted')
    
}