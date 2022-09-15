
function cadPessoa(nome, senha, email, sexo, aceite, mensagem) {
    
    let tb = document.getElementById("tbPessoas")
    let qtdLinhas = tb.rows.length
    let linha = tb.insertRow(qtdLinhas)

    let cellCodigo = linha.insertCell(0)
    let cellNome = linha.insertCell(1)
    let cellSenha = linha.insertCell(2)
    let cellEmail = linha.insertCell(3)
    let cellSexo = linha.insertCell(4)
    let cellAceite = linha.insertCell(5)
    let cellMensagem = linha.insertCell(6)

    cellCodigo.innerHTML = qtdLinhas
    cellNome.innerHTML = nome
    cellSenha.innerHTML = senha
    cellEmail.innerHTML = email
    cellSexo.innerHTML = sexo
    cellAceite.innerHTML = aceite
    cellMensagem.innerHTML = mensagem

}