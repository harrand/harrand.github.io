function getReadme($repo_name)
{
	$url = "https://github.com/Harrand/" + $repo_name + "/blob/master/README.md";
	$.get('file_to_read.txt', function(data)
	{
		return data;
	}, 'text');
}