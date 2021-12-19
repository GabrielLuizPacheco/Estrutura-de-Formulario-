function salvar(){

    var nome, Email, nascimento, telefone, CPF, sexo, motivo, periodo;

    nome = document.meuForm.nome.value;
    Email= document.meuForm.email.value;
    nascimento= document.meuForm.nascimento.value;
    telefone= document.meuForm.telefone.value;
    CPF= document.meuForm.CPF.value;
    sexo = document.meuForm.sexo.value;
    motivo= document.meuForm.motivo.value;
    periodo= document.meuForm.periodo.value;


    
    if(confirm("Nome: " + nome  +
               "\ne-mail: " + Email +  
               "\nNascimento: " + nascimento +
               "\nTelefone: " + telefone +
               "\nCPF: " + CPF +
               "\nSexo: " + sexo +
               "\nMotivo: " + motivo+
               "\nPeriodo: " + periodo))
    {
        alert("Dados Confirmados");
    }
    else 
    {
        alert("Dados Rejeitados");
    };
}