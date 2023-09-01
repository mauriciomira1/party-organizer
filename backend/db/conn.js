const mongoose = require('mongoose')

async function main() {
  try {
    await mongoose.connect('mongodb+srv://mauricio:nS2DW0G4UCnhpfY9@cluster0.uv5uky5.mongodb.net/?retryWrites=true&w=majority')
    console.log('Conectado ao banco de dados.')
  } catch (error) {
    console.log(`Erro: ${error}`)
  }
}

module.exports = main;