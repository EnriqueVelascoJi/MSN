const Mecanico = require('../models/Mecanico.Model')

//Get all users
exports.get_all_mecanicos = async (req, res) => {

    Mecanico.find({}, (err,result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
}
exports.create_mecanico= async (req, res) => {

    let {
        idMecanico,
        nombre,
        fechaIngreso
    } = req.body 

    try{
        let mecanico= new Usuario({
            idMecanico,
            nombre,
            fechaIngreso
        })
       let createdMecanico = await mecanico.save() 
       res.status(201).json({
        status : 'Success',
        data : {
            createdMecanico
        }
    })
    }catch(err){
        console.log(err)
    }
}
exports.update_mecanico = async(req, res) => {

        
    try{
        const updatedMecanico = await Mecanico.findByIdAndUpdate(req.params.id,req.body,{
            new : true,
            runValidators : true
        })
        
        res.status(200).json({
            status : 'Success',
            data : {
              updatedMecanico
            }
        })
    }catch(err){
        console.log(err)
    }
}
exports.delete_mecanico = async(req, res) => {

    const id = req.params.id
    await Mecanico.findByIdAndRemove(id).exec()
    res.send('Deleted')
    
}