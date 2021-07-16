import { Dog } from '../models/dog.js'

export {
    newDog as new,
    create,
    index,
    show,
}

function newDog(req, res){
    res.render('dogs/new', {
        title: 'Dog Intake'
    })
}

function create(req, res){
    for(let key in req.body){
        if(req.body[key] === '') delete req.body[key]
    }
    const dog = new Dog(req.body)
    dog.save(function(error) {
        if (error) return res.render('dogs/new')
        res.redirect('/dogs')
    })
}

function index(req, res){
    Dog.find({}, function(error, dogs){
        console.log(dogs)
        res.render('dogs/index', {
            error: error,
            dogs: dogs,
            title: 'All Dogs',
        })
    })
}

function show(req, res){
    Dog.findById(req.params.id, function(error, dog){
        res.render('dogs/show', {
            title: 'Dog Details',
            dog: dog,
            error: error,
        })
    })
}