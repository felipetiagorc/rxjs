const fs = require('fs');
const path = require('path');
const { Observable } = require('rxjs');
const caminho = path.join(__dirname, 'fotos');

function lerDiretorio(caminho) {
  return new Observable(subscriber => {
    try {
      fs.readdirSync(caminho).forEach(arquivo => {
        // chama um next pra cada arquivo da pasta:
        subscriber.next(path.join(caminho, arquivo));
      });

      subscriber.complete();
    } catch (e) {
      subscriber.error(e);
    }
  });
}

/// vc quer passar um array com todos os caminhos ? ou cada arquivo independente como stream de dados?
// vamos passar stream de dados com rxjs.. na promise precisa passar tudo de uma vez.
// por isso o mais importante é substituir o '.map' por '.forEach'

lerDiretorio(caminho).subscribe(console.log);
