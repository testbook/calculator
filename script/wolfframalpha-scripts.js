const params = new URLSearchParams(window.location.search)
const scriptID = params.get('id');

const calcEmptyBody = document.getElementById('cardBody');
var wolfFrameElement = document.createElement('script');
const errorAlertText = 'Should be minimum 1 character.';
const errorAlertSelector = document.getElementById('errorAlert');
const errorAlert = document.getElementById('errorAlert');

window.onload = function() {

    console.log(scriptID)
    
    if(!scriptID){
        calcEmptyBody.innerHTML = `
        <div class="card__empty">
            <h3>Wrong URl</h3>
        </div>`

    }else{
        try {
            wolfFrameElement.setAttribute('id', `WolframAlphaScript${scriptID}`);
            wolfFrameElement.setAttribute('src', `https://www.wolframalpha.com/widget/widget.jsp?id=${scriptID}`);  
            var body = document.querySelector('body');
            body.appendChild(wolfFrameElement);
        } catch (error) {
            console.error;
        }
    }
};
