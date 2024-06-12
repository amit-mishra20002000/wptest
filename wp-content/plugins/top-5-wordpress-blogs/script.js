(function (blocks, editor, element) {
  var el = element.createElement;
  var serverSideRender = false; // Set to true for server-side rendering if needed

  blocks.registerBlockType("top-5-wordpress-blogs/top-5-blogs", {
    edit: function (props) {
      var attributes = props.attributes;
      var setAttributes = props.setAttributes;

      return el(
        "div",
        { className: "top-5-blogs-settings" },
        el(
          "select",
          {
            value: attributes.orderBy,
            onChange: function (event) {
              setAttributes({ orderBy: event.target.value });
            },
          },
          el("option", { value: "ASC" }, "ASC"),
          el("option", { value: "DESC" }, "DESC")
        ),
        el(
          "select",
          {
            value: attributes.order,
            onChange: function (event) {
              setAttributes({ order: event.target.value });
            },
          },
          el("option", { value: "name" }, "Name"),
          el("option", { value: "publishDate" }, "Publish Date")
        ),
        el(
          "label",
          null,
          "Number of Blogs to Display: ",
          el("input", {
            type: "number",
            value: attributes.numberOfDisplay,
            onChange: function (event) {
              setAttributes({ numberOfDisplay: parseInt(event.target.value) });
            },
          })
        )
      );
    },
    save: function () {
      return serverSideRender ? el(element.RawHTML, null, "") : null;
    },
  });
})(window.wp.blocks, window.wp.editor, window.wp.element);
