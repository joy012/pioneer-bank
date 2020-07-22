// log in button event handler
document.getElementById('login').addEventListener('click', function(){
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('transaction-area').style.display = 'block';
})
// deposit button event handler
document.getElementById('addDeposit').addEventListener('click', function(){
    const depositAmount = getInputValue('depositAmount');
    updateSpanText('currentDeposit',depositAmount);
    updateSpanText('currentBalance',depositAmount);

    document.getElementById('depositAmount').value = [];
})
// withdraw button event handler
document.getElementById('cashWithdraw').addEventListener('click',function(){
    const withdrawAmount = getInputValue('withdrawAmount');
    updateSpanText('currentWithdraw',withdrawAmount);
    updateSpanText('currentBalance', -1 * withdrawAmount);

    document.getElementById('withdrawAmount').value = [];
})

function getInputValue(id){
   return parseFloat(document.getElementById(id).value);
}

function updateSpanText(id,Amount){
    const current = parseFloat(document.getElementById(id).innerText);
    const total = current + Amount;
    document.getElementById(id).innerText = total;
}

