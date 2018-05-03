/**
 * 
 */

window.onload = (function() {
	return function() {
		
		console.log('Loaded');
		const calculator = document.querySelector('.calculator');
		const buttons = calculator.querySelector('.buttons');
		const display = calculator.querySelector('.result_display');
		var lastKeyOperator = false;
		buttons.addEventListener('click', e => {
			if(e.target.matches('button')) {
				const key = e.target;
				const action = key.dataset.action;
				const keyContent = key.textContent;
				const displayedNum = display.textContent;
			
				
				if (action === 'add' || 
					action === 'subtract' ||
					action === 'multiply' ||
					action === 'divide'	
					) {
					lastKeyOperator = true;
//					key.classList.add('is-depressed')
				}
				
				if (action === 'decimal') {
					if(!displayedNum.includes('.')) {
						display.textContent = displayedNum + '.';
					}
				}
				if (action === 'clear') {
					
				}
				if (action === 'calculate') {
					
//					Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));
				}
				
				if(!action) {
					
					if(displayedNum === '0' || lastKeyOperator) {
						display.textContent = keyContent;
					} else {
						display.textContent = displayedNum + keyContent;
					}
					lastKeyOperator = false;
				}
			}
		});		
	}
})();

