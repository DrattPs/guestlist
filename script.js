var people_names = [];
    
function submit()
{
    var GuestName = document.getElementById("name1").value;
	people_names.push(GuestName);

	console.log(GuestName);
        
    console.log(names_of_people);
    var lenght_of_name = people_names.length;
    console.log(lenght_of_name);
	document.getElementById("display_name").innerHTML= people_names.toString();
	
   }

function sorting()
{
	people_names.sort();
	var i= people_names.join("<br>");
    console.log(people_names);		
	document.getElementById("sorted").innerHTML=i.toString();
	}

function show()
{
	var i= people_names.join("<br>");
	console.log(people_names);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sort_button").style.display="block";
	}

function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<people_names.length; j++)
		{
			if(s==people_names[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}