import mongoose from 'mongoose'

export {
    Dog
}

const Schema = mongoose.Schema

const behaviorSchema = new Schema({
    humans: {type: Boolean, required: true},
    kids: {type: Boolean, required: true},
    otherDogs: {type: Boolean, required: true},
    cats: {type: Boolean, required: true},
    houseBroken: {type: Boolean, required: true},
    energy: {type: Number, min: 1, max: 5},
})

const vaccineSchema = new Schema({
    parvo: {type: Boolean, required: true},
    parvoRec: {type: Date, required: true},
    parvoDueNext: {type: Date, required: true},
    distemper: {type: Boolean, required: true},
    distRec: {type: Date, required: true},
    distDueNext: {type: Date, required: true},
    hepatitis: {type: Boolean, required: true},
    hepRec: {type: Date, required: true},
    hepDueNext: {type: Date, required: true},
    rabies: {type: Boolean, required: true},
    rabiesRec: {type: Date, required: true},
    rabiesDueNext: {type: Date, required: true},
})

const dogSchema = new Schema ({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    breed: {type: String, required: true},
    weight: {type: Number, required: true},
    idealWeight: {type: Number, required: true},
    coat: {type: String, required: true},
    fixed: {type: String, required: true},
    health: String,
    behavior: {type: [behaviorSchema]},
    vaccination: {type: [vaccineSchema]},
    adoptable: {type: Boolean, default: true},
}, {
    timestamps: true,
})

const Dog = mongoose.model('Dog', dogSchema)