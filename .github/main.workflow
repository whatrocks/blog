workflow "New workflow" {
  resolves = ["Create an issue"]
  on = "push"
}

action "Create an issue" {
  uses = "JasonEtco/create-an-issue@d10d7bc2a567fa4288ead6b91f307aa4b44fb9f7"
}
