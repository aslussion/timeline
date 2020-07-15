const c_textBottom = 'tl_text-bottom';
const c_pointCenter = 'tl_point-center';

const c_stepProcess = 'tl__step_process';
const c_stepDone = 'tl__step_done';

const c_step = 'tl__step';
const c_step_class = '.'+c_step;


window.onload = function() {
	const $timeline = document.getElementById('j-timeline');

	document.getElementById('j-changeText').onchange = function(){
		switch(this.value){
			case 'b':
				$timeline.classList.add(c_textBottom);
				break;
			default:
				$timeline.classList.remove(c_textBottom);
				break;
		}
	};
				
	document.getElementById('j-changeLabel').onchange = function(){
		switch(this.value){
			case 'p':
				$timeline.classList.add(c_pointCenter);
				break;
			default:
				$timeline.classList.remove(c_pointCenter);
				break;
		}
	};
				
	document.getElementById('j-addStep').onclick = function(){
		const status = document.getElementById('j-status').value;
		const statusClass = getStatusClass(status);
		
		const cnt = $timeline.querySelectorAll(c_step_class).length + 1;

		const $newStep = document.createElement('div');
		$newStep.className = c_step+' '+statusClass;
		//$newStep.innerHTML = `<span class='tl__step-points'></span><span class='tl__step-text'>Step ${cnt}</span>`;//doesn't working in IE 11
		$newStep.innerHTML = "<span class='tl__step-points'></span><span class='tl__step-text'>Step "+cnt+"</span>";
		
		$timeline.appendChild($newStep);
	};

	document.getElementById('j-deleteStep').onclick = function(){
		const steps = $timeline.querySelectorAll(c_step_class);
		const length = steps.length;
		if(length > 0){
			const stepLast = steps[length - 1];
			stepLast.parentNode.removeChild(stepLast);
		}
		else
			alert("Nothing to delete.");
	};

}

function getStatusClass(status){
	switch(status){
		case 'p':
			return c_stepProcess;
		case 'd':
			return c_stepDone;
	}
	return '';
}