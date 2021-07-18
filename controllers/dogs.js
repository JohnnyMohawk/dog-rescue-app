import { Dog } from '../models/dog.js'

export {
    newDog as new,
    create,
    index,
    show,
    deleteDog as delete,
    vaccineForm,
}

function newDog(req, res){
    res.render('dogs/new', {
        title: 'Dog Intake',
        user: req.user
    })
}

// function create(req, res){
//     // console.log('1: ', req.body)
//     for(let key in req.body){
//         if(req.body[key] === '') delete req.body[key]
//     }
//     // console.log('2: ', req.body)
//     const dog = new Dog(req.body)
//     console.log('DOG DATA', dog)
//     dog.save(function(error) {
//         if (error) return res.render('dogs/new', {
//             title: 'Dog Intake',
//             user: req.user
//         })
//         res.redirect('/dogs')
//     })
// }

function vaccineForm(req, res){
    req.body.parvo = !!req.body.parvo
    req.body.distemper = !!req.body.distemper
    req.body.hepatitis = !!req.body.hepatitis
    req.body.rabies = !!req.body.rabies
    Dog.findById(req.params.id, function(error, dog){
        console.log(req.body)
        dog.vaccination.push(req.body)
        dog.save(error => {
            res.redirect(`/dogs/${dog._id}`)
        })
        console.log(dog)
    })
}

function deleteDog(req, res){
    Dog.findByIdAndDelete(req.params.id, function(error, dog){
        res.redirect('/dogs')
    })
}

function create(req, res){
    req.body.adoptable = !!req.body.adoptable
    // console.log('1: ', req.body)
    for(let key in req.body){
        if(req.body[key] === '') delete req.body[key]
    }
    // console.log('2: ', req.body)
    const dog = new Dog(req.body)
    console.log('FINAL', dog)
    dog.save(function(error) {
        if (error) {
            console.log(error)
            return res.redirect('/dogs/new')
        }
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
            user: req.user
        })
    })
}

function show(req, res){
    Dog.findById(req.params.id, function(error, dog){
        res.render('dogs/show', {
            title: 'Dog Details',
            dog: dog,
            user: req.user,
            error: error,
        })
    })
}