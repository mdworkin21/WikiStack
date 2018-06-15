const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <div>Author Name</div>
    <input id="AUTHOR NAME" name="name" type="text class="form-control/>

    <div>Author Email</div>
    <input id="AUTHOR Email" name="email" type="text class="form-control/>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div>Give Me Content</div>
        <input id="Content Area" name="content" type="text class="form-control/>


    <div>Status</div>
        <input id="Page Status" name="status" type="text class="form-control/>


    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
