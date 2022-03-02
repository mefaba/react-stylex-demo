module.exports.default = function (source) {
  //extract style and script
  const indexStyleTagStart = source.indexOf("<style>");
  let extractedStyle = source.substring(indexStyleTagStart, source.length);
  let extractedScript = source.substring(0, indexStyleTagStart);

  //remove style tag from style extractedStyle String
  extractedStyle = extractedStyle.replace("<style>", "").replace("</style>", "");

  const output = {
    script: {
      javascript: extractedScript,
    },
    style: {
      "text/css": extractedStyle,
    },
  };

  return output;
};
