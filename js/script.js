const converter = () => {

    const umWon = 0.0040;
    const valorWons = parseFloat(document.getElementById('wons').value);

    if(isNaN(valorWons) || valorWons === 0) {
        document.getElementById('result').textContent = 'Inválido';
        return;
    }
    
    let result = parseFloat(valorWons * umWon);
    document.getElementById('result').textContent = "R$" + result.toFixed(2).replace('.', ',');

};