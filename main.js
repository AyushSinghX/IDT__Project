document.addEventListener('DOMContentLoaded', function() {
    const inputElements = document.querySelectorAll('input[type="number"]');
    const averageDisplay = document.getElementById('average');
    const ayush = document.getElementById('ayush')
    inputElements.forEach(input => {
        input.addEventListener('input', calculateAverage);
    });

    function calculateAverage() {
        let total = 0;
        let count = 0;

        inputElements.forEach(input => {
            if (input.value !== '') {
                total += parseInt(input.value);
                count++;
            }
        });

        const average = count > 0 ? total / count : 0;
        averageDisplay.textContent = average.toFixed(2); // Display average rounded to 2 decimal places
        if (average>300){
            averageDisplay.style.backgroundColor = 'red'
            ayush.innerHTML = "<center><button>Reduce usage immediately</button></center>"
        }
        else if(average>150 && average<300){
            averageDisplay.style.backgroundColor = 'blue'
            ayush.innerHTML = "<center><button>Monitor and adjust consumption</button></center>"
        }
        else{
            averageDisplay.style.backgroundColor = 'green'
            ayush.innerHTML = "<center><button>Maintain conservation efforts</button></center>"
        }
    }
});
