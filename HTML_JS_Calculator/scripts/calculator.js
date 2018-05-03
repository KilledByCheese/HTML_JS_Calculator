
window.onload = (function() {
	return function() {
		
		console.log('Loaded');
		const calculator = document.querySelector('.calculator');
		const buttons = calculator.querySelector('.buttons');
		const display = calculator.querySelector('.result_display');
		var lastKeyOperator = false;
		var firstNum;
		var secondNum;
		var result;
		var operant;
		var calculatet = false;
		
		buttons.addEventListener('click', e => {
			if(e.target.matches('button')) {
				const key = e.target;
				const action = key.dataset.action;
				const keyContent = key.textContent;
				var displayedNum = display.textContent;
				
				if (action === 'add' || 
					action === 'subtract' ||
					action === 'multiply' ||
					action === 'divide'	
					) {
					
					
					if(!lastKeyOperator && operant === undefined) {
						key.classList.add('selectedOperator');
						if (action === 'add' ) {
							operant = '+';
						}
						
						if (action === 'subtract') {
							operant = '-';
						}
						
						if (action === 'multiply') {
							operant = '*';
						}
						
						if (action === 'divide') {
								operant = '/';		
						}
						firstNum = displayedNum;
						lastKeyOperator = true;
						console.log('Operator: ' + operant);
					}
					
				}
				
				if (action === 'decimal') {
					if(lastKeyOperator) {
						firstNum = displayedNum;
						display.textContent = '0.';
						lastKeyOperator = false;
					}else if(!displayedNum.includes('.')) {
						display.textContent = displayedNum + '.';
					}
				}
				
				if (action === 'clear') {
					result = 0;
					firstNum = 0;
					secondNum = 0;
					operant = undefined;
					display.textContent = '0';
					lastKeyOperator = false;
					Array.from(key.parentNode.children).forEach(k => k.classList.remove('selectedOperator'));
				}
				
				if (action === 'calculate') {
					secondNum = displayedNum;
					console.log('calculate ' + firstNum + ' ' + secondNum );
					if(operant === '+') {
						console.log('calculate +');
						result = parseFloat(firstNum) + parseFloat(secondNum);
					}
					
					if(operant === '-') {
						console.log('calculate -');
						result = parseFloat(firstNum) - parseFloat(secondNum);
					}
					
					if(operant === '*') {
						console.log('calculate *');
						result = parseFloat(firstNum) * parseFloat(secondNum);
					}
					
					if(operant === '/') {
						console.log('calculate /');
						result = parseFloat(firstNum) / parseFloat(secondNum);
					}
					
					console.log(result)
					if(result === undefined) {
						result = 0;
					}
					display.textContent = result;
					
					displayedNum = result;
					calculatet = true;
					operant = undefined;
					lastKeyOperator = false;
					Array.from(key.parentNode.children).forEach(k => k.classList.remove('selectedOperator'));
				}
				
				if(!action) {
					
					if(displayedNum === '0' || lastKeyOperator || calculatet) {
						display.textContent = keyContent;
						displayedNum = display.textContent;
						calculatet = false;
					} else {
						display.textContent = displayedNum + keyContent;
						displayedNum = display.textContent;
					}
					lastKeyOperator = false;
				}
			}
		});		
	}
})();



