const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'fotos');

function lerDiretorio(caminho) {
  let arquivos = fs.readdirSync(caminho);
  return arquivos.map(arquivo => path.join(caminho, arquivo));
}

const arquivos = lerDiretorio(caminho);

console.log(arquivos);
