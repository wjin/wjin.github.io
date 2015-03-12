function preview(DivId)
{
	document.getElementById("welcome").style.display='none';
	document.getElementById("employment").style.display='none';
	document.getElementById("project").style.display='none';

	document.getElementById(DivId).style.display='';
}
