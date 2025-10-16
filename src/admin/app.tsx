import {
  Bold,
  Italic,
  Essentials,
  Heading,
  Link,
  List,
  Table,
  SourceEditing,
  Paragraph,
} from "ckeditor5";

import {
  type PluginConfig,
  type Preset,
  setPluginConfig,
} from "@_sh/strapi-plugin-ckeditor";

const BBJPreset: Preset = {
  name: "BBJ Configuaration",
  description: "BBJ Configuaration preset",
  editorConfig: {
    licenseKey: "GPL",
    plugins: [Bold, Italic, Essentials, Heading, Link, List, Paragraph, Table, SourceEditing],
    toolbar: [
      "heading",
      "|",
      "bold",
      "italic",
      "underline",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "blockQuote",
      "insertTable",
      "sourceEditing",
      "undo",
      "redo",
    ],
  },
};

const myConfig: PluginConfig = {
  presets: [BBJPreset],
};

export default {
  register() {
    setPluginConfig(myConfig);
  },
};
