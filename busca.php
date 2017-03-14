<?php 
/**
 * Exemplo de retorno 
 */

$retorno[0] = array(
    'id' => 'teste',
    'name' => 'teste2'
);

$retorno[1] = array(
    'id' => 'teste1',
    'name' => 'teste3'
);

echo json_encode($retorno);

?>