function loadReadme(repository_name)
{
	var url = "https://github.com/Harrand/" + repository_name + "/blob/master/README.md";
	//alert(url);
	var jsonFile = new XMLHttpRequest();
    jsonFile.open("GET", url, true);
    jsonFile.send();
	alert("sent request");
    jsonFile.onreadystatechange = function()
	{
        if (jsonFile.readyState == 4 && jsonFile.status == 200)
		{
            document.write(jsonFile.responseText);
        }
		else
			alert("Request readyState = " + jsonFile.readyState + ", status = ", jsonFile.status);
     }
}