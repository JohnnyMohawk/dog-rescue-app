import { Dog } from '../models/dog.js'

export {
    newDog as new,
    create,
    index,
    show,
    deleteDog as delete,
    createVaccsLog,
    createBehaviorTag,
    addVaccs,
    addBehavior,
    procAdoption,
    procTransfer,
}

function procTransfer(req, res){
    res.render('dogs/transfer', {
        title: 'Transfer Form',
        // user: req.user
    })
}

function procAdoption(req, res){
    res.render('dogs/adoption', {
        title: 'Adoption Form',
        // user: req.user
    })
}

function newDog(req, res){
    res.render('dogs/new', {
        title: 'Dog Intake',
        // user: req.user
    })
}

function addVaccs(req, res) {
    Dog.findById(req.params.dog_id, function (err, dog) {
        // console.log(dog)
        res.render('dogs/vaccines', {
            title: 'Vaccination Form',
            // user: req.user,
            dog: dog,
            err: err,
        })
    })
}

function addBehavior(req, res) {
    Dog.findById(req.params.dog_id, function (err, dog) {
        // console.log(dog)
        res.render('dogs/behavior', {
            title: 'Behavioral Form',
            // user: req.user,
            dog: dog,
            err: err,
        })
    })
}

// function createVaccsLog(req, res){
//     req.body.parvo = !!req.body.parvo
//     req.body.distemper = !!req.body.distemper
//     req.body.hepatitis = !!req.body.hepatitis
//     req.body.rabies = !!req.body.rabies
//     req.body.humans = !!req.body.humans
//     req.body.kids = !!req.body.kids
//     req.body.otherDogs = !!req.body.otherDogs
//     req.body.cats = !!req.body.cats
//     req.body.houseBroken = !!req.body.houseBroken
//     Dog.findById(req.params.id, function(error, dog){
//         console.log(req.body)
//         dog.vaccination.push(req.body)
//         dog.behavior.push(req.body)
//         dog.save(error => {
//             res.redirect(`/dogs/${dog._id}`)
//         })
//         console.log(dog)
//     })
// }

function createVaccsLog(req, res){
    req.body.parvo = !!req.body.parvo
    req.body.distemper = !!req.body.distemper
    req.body.hepatitis = !!req.body.hepatitis
    req.body.rabies = !!req.body.rabies
    Dog.findById(req.params.id, function(error, dog){
        // console.log(req.body)
        dog.vaccination.push(req.body)
        dog.save(error => {
            res.redirect(`/dogs/${dog._id}`)
        })
        // console.log(dog)
    })
}

function createBehaviorTag(req, res){
    req.body.humans = !!req.body.humans
    req.body.kids = !!req.body.kids
    req.body.otherDogs = !!req.body.otherDogs
    req.body.cats = !!req.body.cats
    req.body.houseBroken = !!req.body.houseBroken
    Dog.findById(req.params.id, function(error, dog){
        // console.log(req.body)
        dog.behavior.push(req.body)
        dog.save(error => {
            res.redirect(`/dogs/${dog._id}`)
        })
        // console.log('is this working', dog)
    })
}

function deleteDog(req, res){
    Dog.findByIdAndDelete(req.params.id, function(error, dog){
        res.redirect('/dogs')
    })
}

function create(req, res){
    req.body.intakeRep = req.user.profile
    req.body.adoptable = !!req.body.adoptable
    // console.log('1: ', req.body)
    for(let key in req.body){
        if(req.body[key] === '') delete req.body[key]
    }
    // console.log('2: ', req.body)
    const dog = new Dog(req.body)
    // console.log('FINAL', dog)
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
        // console.log(dogs)
        res.render('dogs/index', {
            error: error,
            dogs: dogs,
            title: 'All Dogs',
            // user: req.user
        })
    })
}

function show(req, res){
    Dog.findById(req.params.id, function(error, dog){
        res.render('dogs/show', {
            title: 'Dog Details',
            dog: dog,
            // user: req.user,
            error: error,
        })
    })
}

