function Speaker(name) {
  this.name = name;
};

Speaker.prototype.worksAt(name) {
  this.company = name;
}

Speaker.prototype.loves(subjects) {
  this.loves = subjects;
}

Speaker.prototype.isTalkingAbout(topic) {
  this.topic = topic;
}

