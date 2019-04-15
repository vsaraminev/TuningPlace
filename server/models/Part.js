const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
  title: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  model: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  year: {
    type: mongoose.Schema.Types.Number,
    required: true
  },
  description: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  price: {
    type: mongoose.Schema.Types.Number,
    required: true
  },
  image: {
    type: mongoose.Schema.Types.String,
    required: true
  }
});

const Part = mongoose.model('Part', partSchema);

module.exports = Part;

module.exports.seedParts = () => {
  Part.find({}).then(parts => {
    if (parts.length > 0) return

    const seedParts = [
      {
        title: 'Big Turbo',
        model: 'Audi A4 B8',
        year: '2015',
        description: 'This is my test description',
        price: '150',
        image: 'https://proformance-diesel.com/wp-content/uploads/stage_2.jpg'
      }
    ]

    Part
      .create(seedParts)
      .then(() => console.log('Seeded parts successfully.'))
      .catch((error) => console.log(error))
  })
}
