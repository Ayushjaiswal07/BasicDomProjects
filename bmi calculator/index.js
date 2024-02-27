const form = document.querySelector('form');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    if(height==='' || height<0 || isNaN(height))
    {
        result.innerHTML = `<span>Enter valid height ${height}</span>`;
    }
    else if(weight==='' || weight<0 || isNaN(weight))
    {
        result.innerHTML = `<span>Enter valid weight ${weight}</span>`;
    }
    else
    {
        const BMI = (weight/((height*height)/10000)).toFixed(2);
        let str;
        if(BMI<18.6)
        {
            str = "You are under weight";
        }
        else if(BMI>=18.6 && BMI<=24.9)
        {
            str = "You are in normal range";
        }
        else{
            str = "You are over weight";
        }
        result.innerHTML = `<span>Your BMI is ${BMI} and ${str}!</span>`;
    }
});

