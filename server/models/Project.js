const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
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
  image: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [{ type: mongoose.Schema.Types.String }]
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;

module.exports.seedProjects = () => {
  Project.find({}).then(projects => {
    if (projects.length > 0) return

    const seedProjects = [
      {
        title: 'Audi A4 450HP Big Turbo',
        model: 'Audi A4 B8',
        year: '2015',
        description: 'This is my cool Audi A4 project',
        image: 'https://www.tuningblog.eu/wp-content/uploads/2016/07/Audi-A4-B8-Limousine-ROT-RED-Tuning-Vossen-Wheels.jpg',
        creator: '5c86a9be1f731405acfd60e8',
      },
      {
        title: 'Audi S8 1450HP Twin Turbo',
        model: 'Audi S8',
        year: '2018',
        description: 'This is my cool Audi S8 project',
        image: 'https://i.ytimg.com/vi/GKcmYK36tFM/maxresdefault.jpg',
        creator: '5c86a9be1f731405acfd60e8',
      }
    ]

    Project
      .create(seedProjects)
      .then(() => console.log('Seeded projects successfully.'))
      .catch((error) => console.log(error))
  })
}