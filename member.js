function skillsMember() {
  var member = document.getElementsByClassName("member");
  for (var i = 0; i < member.length; i++) {
    member[i].classList.add("skills-member");
  }
}