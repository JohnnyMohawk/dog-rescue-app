import mongoose from 'mongoose'

export {
    Dog
}

const Schema = mongoose.Schema

const behaviorSchema = new Schema({
    humans: Boolean,
    kids: Boolean,
    otherDogs: Boolean,
    cats: Boolean,
    houseBroken: Boolean,
    energy: {type: Number, min: 1, max: 5},
    behaviorNotes: String,
}, {
    timestamps: true,
})

const vaccineSchema = new Schema({
    parvo: Boolean,
    parvoRec: {type: Date, required: true},
    parvoDueNext: {type: Date, required: true},
    distemper: Boolean,
    distRec: {type: Date, required: true},
    distDueNext: {type: Date, required: true},
    hepatitis: Boolean,
    hepRec: {type: Date, required: true},
    hepDueNext: {type: Date, required: true},
    rabies: Boolean,
    rabiesRec: {type: Date, required: true},
    rabiesDueNext: {type: Date, required: true},
    healthNotes: String,
}, {
    timestamps: true,
})

const foreverHomeSchema = new Schema({
    adoptorName: {type: String, required: true},
    adoptAddress: {type: String, required: true},
    adoptPhone: String,
    adoptEmail: {type: String, required: true},
}, {
    timestamps: true,
})

const transferRescueSchema = new Schema({
    specialRescue: {type: String, required: true},
    rescueAddress: {type: String, required: true},
    rescuePhone: {type: String, required: true},
    rescueEmail: {type: String, required: true},
}, {
    timestamps: true,
})

const dogSchema = new Schema ({
    intakeRep: {type: mongoose.Schema.Types.ObjectId, ref: "Profile", required: true},
    name: {type: String, required: true},
    age: {type: Number, required: true},
    breed: {type: String, required: true},
    weight: {type: Number, required: true},
    idealWeight: {type: Number, required: true},
    coat: {type: String, required: true},
    fixed: {type: String, required: true},
    generalNotes: String,
    behavior: {type: [behaviorSchema]},
    vaccination: {type: [vaccineSchema]},
    adoptable: {type: Boolean, default: false},
    adopted: {type: Boolean, default: false},
    foreverHome: {type: [foreverHomeSchema]},
    transferred: {type: Boolean, default: false},
    transferRescue: {type: [transferRescueSchema]},
}, {
    timestamps: true,
})

const Dog = mongoose.model('Dog', dogSchema)