const mongoose = require('mongoose');

const uri = process.env.URI;
if(!uri) {
    throw new Error('URI not found in the enviroment');
}
const PersonSchema = new mongoose.Schema({
    name: String,
    age: Number
});
const PersonModel = mongoose.model('PersonModel', PersonSchema);

const handler = async (event) => {
    console.log(`Connecting to: ${uri}`);
    await mongoose.connect(uri);
    console.log('Connected!');

    const grimur = new PersonModel({
        name: 'Grimur',
        age: 11
    });
    const hekla = new PersonModel({
        name: 'Hekla',
        age: 9
    });

    await PersonModel.create(grimur);
    await PersonModel.create(hekla);
    const allPersons = await PersonModel.find({});
    console.log(`fetched ${allPersons.length} persons!`);

    return {
        statusCode: 200,
        body: JSON.stringify(allPersons),
    };
};

module.exports = {
    handler
};

