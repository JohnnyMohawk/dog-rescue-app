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
    createAdoptionTag,
    createTransferTag,
    addUpdateVaccs,
    addUpdateBehavior,
    updateVaccs,
    updateBehavior,
    notReadyIndex,
    adoptedIndex,
    transferredIndex,
}

function transferredIndex(req,res){
    Dog.find({}, function(error, dogs){
        res.render('dogs/transferredIndex', {
            error: error,
            dogs: dogs,
            title: 'Specialty Case Transfers',
        })
    })
}

function adoptedIndex(req, res){
    Dog.find({}, function(error, dogs){
        res.render('dogs/adoptedIndex', {
            error: error,
            dogs: dogs,
            title: 'Dogs in Forever Homes!',
        })
    })
}

function notReadyIndex(req, res){
    Dog.find({}, function(error, dogs){
        res.render('dogs/notReadyIndex', {
            error: error,
            dogs: dogs,
            title: 'Not Ready for Adoption',
        })
    })
}

function addUpdateVaccs(req, res){
    console.log('working?')
    Dog.findById(req.params.dog_id, function (err, dog) {
        res.render('dogs/updateVaccs', {
            title: 'Vaccination Form',
            dog: dog,
            err: err,
        })
    })
}

function addUpdateBehavior(req, res){
    console.log('working')
    Dog.findById(req.params.dog_id, function (err, dog) {
        res.render('dogs/updateBehavior', {
            title: 'Behavioral Form',
            dog: dog,
            err: err,
        })
    })
}

function updateBehavior(req, res){
    console.log('working')
    req.body.humans = !!req.body.humans
    req.body.kids = !!req.body.kids
    req.body.otherDogs = !!req.body.otherDogs
    req.body.cats = !!req.body.cats
    req.body.houseBroken = !!req.body.houseBroken
    Dog.findById(req.params.id, function(error, dog){
        dog.behavior = req.body
        dog.save(error => {
            res.redirect(`/dogs/${dog._id}`)
        })
    })
}

function updateVaccs(req, res){
    console.log('working')
    req.body.parvo = !!req.body.parvo
    req.body.distemper = !!req.body.distemper
    req.body.hepatitis = !!req.body.hepatitis
    req.body.rabies = !!req.body.rabies
    Dog.findById(req.params.id, function(error, dog){
        dog.vaccination = req.body
        dog.save(error => {
            res.redirect(`/dogs/${dog._id}`)
        })
    })
}

function createTransferTag(req, res){
    Dog.findById(req.params.id, function(error, dog){
        dog.adoptable = false
        dog.transferred = true
        dog.transferRescue = req.body
        dog.save(error => {
            console.log(error)
            res.redirect(`/dogs/${dog._id}`)
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/dogs")
    })
}

function createAdoptionTag(req, res){
    Dog.findById(req.params.id, function(error, dog){
        dog.adoptable = false
        dog.adopted = true
        dog.foreverHome = req.body
        dog.save(error => {
            console.log(error)
            res.redirect(`/dogs/${dog._id}`)
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/dogs")
    })
}

function procTransfer(req, res){
    Dog.findById(req.params.dog_id, function (err, dog) {
        res.render('dogs/transfer', {
            title: 'Transfer Form',
            dog: dog,
            err: err,
        })
    })
}

function procAdoption(req, res){
    Dog.findById(req.params.dog_id, function (err, dog) {
        res.render('dogs/adoption', {
            title: 'Adoption Form',
            dog: dog,
            err: err,
        })
    })
}

function newDog(req, res){
    res.render('dogs/new', {
        title: 'Dog Intake',
    })
}

function addVaccs(req, res) {
    Dog.findById(req.params.dog_id, function (err, dog) {
        // console.log(dog)
        res.render('dogs/vaccines', {
            title: 'Vaccination Form',
            dog: dog,
            err: err,
        })
    })
}

function addBehavior(req, res) {
    Dog.findById(req.params.dog_id, function (err, dog) {
        res.render('dogs/behavior', {
            title: 'Behavioral Form',
            dog: dog,
            err: err,
        })
    })
}

function createVaccsLog(req, res){
    req.body.parvo = !!req.body.parvo
    req.body.distemper = !!req.body.distemper
    req.body.hepatitis = !!req.body.hepatitis
    req.body.rabies = !!req.body.rabies
    Dog.findById(req.params.id, function(error, dog){
        dog.vaccination = req.body
        dog.save(error => {
            res.redirect(`/dogs/${dog._id}`)
        })
    })
}

function createBehaviorTag(req, res){
    req.body.humans = !!req.body.humans
    req.body.kids = !!req.body.kids
    req.body.otherDogs = !!req.body.otherDogs
    req.body.cats = !!req.body.cats
    req.body.houseBroken = !!req.body.houseBroken
    Dog.findById(req.params.id, function(error, dog){
        dog.behavior = req.body
        dog.save(error => {
            res.redirect(`/dogs/${dog._id}`)
        })
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
    for(let key in req.body){
        if(req.body[key] === '') delete req.body[key]
    }
    const dog = new Dog(req.body)
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
        res.render('dogs/index', {
            error: error,
            dogs: dogs,
            title: 'Adoptable Dogs',
        })
    })
}

function show(req, res){
    Dog.findById(req.params.id, function(error, dog){
        console.log(dog)
        res.render('dogs/show', {
            title: 'Dog Details',
            dog: dog,
            error: error,
        })
    })
}

