$(function () {

	var data = [];

  protein_per = Math.floor(Math.random()*100)+1;
  fibers_per = Math.floor(Math.random()*100)+1;
  sugars_per = Math.floor(Math.random()*100)+1;
  sturated_fat_per = Math.floor(Math.random()*100)+1;

  data[0] = { label: "Protein " + protein_per + " %", data: protein_per }
  data[1] = { label: "Fibers " + fibers_per + " %", data: fibers_per }
  data[2] = { label: "Sugars " + sugars_per + " %", data: sugars_per }
  data[3] = { label: "Sturated Fat " + sturated_fat_per + " %", data: sturated_fat_per }

	$.plot($("#donut-chart"), data,
	{
		colors: ["#F90", "#222", "#777", "#AAA"],
	        series: {
	            pie: {
	                innerRadius: 0.5,
	                show: true
	            }
	        }
	});

  protein_per = Math.floor(Math.random()*100)+1;
  fibers_per = Math.floor(Math.random()*100)+1;
  sugars_per = Math.floor(Math.random()*100)+1;
  sturated_fat_per = Math.floor(Math.random()*100)+1;

  data[0] = { label: "Protein " + protein_per + " %", data: protein_per }
  data[1] = { label: "Fibers " + fibers_per + " %", data: fibers_per }
  data[2] = { label: "Sugars " + sugars_per + " %", data: sugars_per }
  data[3] = { label: "Sturated Fat " + sturated_fat_per + " %", data: sturated_fat_per }
  $.plot($("#today-nutrition-chart"), data,
	{
		colors: ["#F90", "#222", "#777", "#AAA"],
	        series: {
	            pie: {
	                innerRadius: 0.5,
	                show: true
	            }
	        }
	});
	
});