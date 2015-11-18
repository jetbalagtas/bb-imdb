module.exports = {
  movie: [

      "<img src='<%= cover %>' >",
      "<h3><%= title %></h3>",
      "<h4><%= releasedate %></h4>",
      "<p><%= plot %></p>",

  ].join(""),
  form: [
    "<form>",
      "<input type='text' placeholder='Title' name='title'>",
      "<input type='text' placeholder='releasedate' name='releasedate'>",
      "<input type='text' placeholder='cover photo' name='coverPhoto'>",
      "<textarea name='plot'></textarea>",
      "<input type='submit' value='add book'>",
    "</form>"
  ].join(""),
  header: [
    "<h2>HEADER</h2>",
    "<nav>",
    "<ul>",
    "<li>home</li>",
    "</ul>",
    "</nav>"
  ].join(""),
  footer: [
    "<h2>Footer</h2>",
    "<nav>",
    "<ul>",
    "<li>home</li>",
    "</ul>",
    "</nav>"
  ].join(""),
};
