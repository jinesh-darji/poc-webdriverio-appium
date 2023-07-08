class PermissionScreen {
  btnsubmit = "//button[@id=submit]";
  txtsubmit = "//button[@id=submit]";

  async skipbtn() {
    return $(this.btnsubmit);
  }

  async submittxt() {
    return $(this.txtsubmit);
  }

  async saveMethod() {
    console.log("Helper method logic");
  }
}

export default new PermissionScreen();
