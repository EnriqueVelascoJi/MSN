const Cliente = require('../models/Cliente.Model')

//Get all users
exports.get_all_clientes = async (req, res) => {

    Cliente.find({}, (err,result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
}
exports.create_cliente= async (req, res) => {

    let {
        idCliente,
        nombre,
        descripcion
    } = req.body 

    try{
        let cliente= new Usuario({
            idCliente,
            nombre,
            descripcion
        })
       let createdCliente = await cliente.save() 
       res.status(201).json({
        status : 'Success',
        data : {
            createdCliente
        }
    })
    }catch(err){
        console.log(err)
    }
}
exports.update_cliente = async(req, res) => {

        
    try{
        const updatedCliente = await Cliente.findByIdAndUpdate(req.params.id,req.body,{
            new : true,
            runValidators : true
        })
        
        res.status(200).json({
            status : 'Success',
            data : {
              updatedCliente
            }
        })
    }catch(err){
        console.log(err)
    }
}
exports.delete_cliente = async(req, res) => {

    const id = req.params.id
    await Cliente.findByIdAndRemove(id).exec()
    res.send('Deleted')
    
}