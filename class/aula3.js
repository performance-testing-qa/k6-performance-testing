// Realizing Checks 
    // Validam condicoes booleanas no teste de performance 
        // Principalmente em pontos como: Se o sistema esta 
        // respondendo com o conteudo que e esperado.

import http from 'k6/http';

// Nota1
    // primeiro: importar o modulo do k6 que realiza esse tipo de validacao 
    // https://grafana.com/docs/k6/latest/using-k6/modules/
    // obs: quando for importar o modulo, deve-se colocar o nome do modulo
    // entre colchetes, como abaixo.
import { check } from 'k6';

export const options = {
    vus: 1,
    duration: '3s'
}

export default function(){
    
// Nota2
    // segundo: armazenar o conteudo que e retornado da requisicao 
    // em algum lugar. Abaixo colocamos em uma contante.
    const rest = http.get('http://test.k6.io');

    // terceiro: utilizamos o modulo check para validar o objeto.
    check(rest,{

        'status code é 200': (r) => r.status === 200
    })
}
