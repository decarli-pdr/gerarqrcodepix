function GerarPIX(chave, valor, nome_completo, cidade, cep, id) {

    const correcoes = {
        valor: "",
        id:""
    }

    if (valor.length < 10) {
        correcoes.valor = "0"
    } else {
        correcoes.valor = ""
}

    if (id.toString().length < 3) {
        correcoes.id = "0"
        id="***"
    } else {
        if (id.toString().length<10) {
            correcoes.id="0"
        } else {
            correcoes.id=""
        }
    }

    let codigo = `00020126${22 + chave.length}0014BR.GOV.BCB.PIX01${chave.length}${chave}52040000530398654${correcoes.valor}${valor.length}${valor}5802BR59${nome_completo.length}${nome_completo}60${cidade.length}${cidade}6108${cep}62${correcoes.id}${4 + id.toString().length}05${correcoes.id}${id.toString().length}${id.toString()}6304AD38`

    return codigo
}

console.log(GerarPIX("+5551997731163", "0.01", "Pedro De Carli Silva", "Capao da Canoa", "95555-000", 12))
