function vis() {
  var extra = document.querySelector("#xtra");
  var knap = document.querySelector("#knap");

  //if hidden, show. if shown, hide.
  if(extra.style.display!=="block"){
  extra.style.display = "block";
  knap.innerHTML = "Vis mindre..."
} else {
  extra.style.display = "none";
  knap.innerHTML = "Læs mere..."
}


}
