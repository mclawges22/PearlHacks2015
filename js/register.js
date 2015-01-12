$.ajax({
	url: "https://docs.google.com/a/mclawges22.github.io/forms/d/16Qb7ZQSYlXGDc0NahpDbglWvTBIOowByw5isWEv2HIs/formResponse",
	data: {"entry.1" : "Maegan", "entry.2" : "Clawges"},
	type: "POST",
	dataType: "xml"
}).done(function() {
  console.log("success");
});