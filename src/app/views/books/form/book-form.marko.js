// Compiled using marko@4.20.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/simple_node_crud$1.0.0/src/app/views/books/form/book-form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><body><h1>Book's register</h1><form action=\"/books/form\" method=\"post\">");

  if (data.book.id) {
    out.w("<input type=\"hidden\" id=\"id\" name=\"id\"" +
      marko_attr("value", "" + data.book.id) +
      "><input type=\"hidden\" name=\"_method\"" +
      marko_attr("value", "PUT") +
      ">");
  }

  out.w("<div><label for=\"title\">Title:</label><input type=\"text\" id=\"title\" name=\"title\" placeholder=\"book's title\"" +
    marko_attr("value", "" + data.book.title) +
    "></div><div><label for=\"price\">Price:</label><input type=\"text\" id=\"price\" name=\"price\" placeholder=\"150.25\"" +
    marko_attr("value", "" + data.book.price) +
    "></div><div><label for=\"description\">Description:</label><textarea cols=\"20\" rows=\"10\" id=\"description\" name=\"description\" placeholder=\"Descrive the book's subject\">\n\t\t\t\t\t\t\t" +
    marko_escapeXml(data.book.description) +
    "\n\t\t\t\t\t</textarea></div><input type=\"submit\" value=\"Save\"></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "16");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/simple_node_crud$1.0.0/src/app/views/books/form/book-form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
