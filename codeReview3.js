function cal_Insurance() {
	var name = document.getElementById('name').value;
	var age = document.getElementById('Age').value;
	var country = document.getElementById('country').value;
	var h_power = document.getElementById('h-power').value;

	var insurance = h_power * 100 / age + 150;
	var result = Math.floor(insurance);
	
	
		
	if ( isNaN(result)) {
		document.getElementById('Result').innerHTML = ("Please fill in the fields");
		} else if (age == 0) {
		document.getElementById('Result').innerHTML = ("Please fill in the Age field");	
		} else if (h_power == 0){
		document.getElementById('Result').innerHTML = ("Please fill in the Horsepower field");
		} else  {
		document.getElementById('Result').innerHTML = ("Hello " + name + ", the insurance for you Car is : " + result + "€ Yearly.");
		}


}