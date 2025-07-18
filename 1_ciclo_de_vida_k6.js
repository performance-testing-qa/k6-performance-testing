// CICLO DE VIDA COM K6: bem definido, sempre passará por essas fases 
// na mesma ordem


// 1. inicializacao
    // importacao de um modulo de sleep nativo do k6
import sleep from 'k6';

// 2. configuracao
    // pode ter mais de um bloco de configuracao
export const option = {
    vus: 1,
    duration: '10s'
}

// 3. execucao // codigo vu
export default function(){
    console.log("testando o k6");
    sleep(1);
}


// 4. desmontagem
    // etapa opcional do teste
    // util quando queremos enviar resultados para um webook, plataforma
    // externa ou notificar;
    // tambem responsavel por encerrar o teste

export function teardown(data){
    console.log(data);
}