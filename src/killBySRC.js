
// remove script tags matching the following patterns

var patterns = [
    'wp-content/plugins/pippity',   // pippity poppity
    'clickfuse.com'                 // clickfuse
];

var scripts = window.document.getElementsByTagName('script');

for (var scriptfile in scripts) {
  if (scripts.hasOwnProperty(scriptfile)) {
    for (var pattern in patterns) {
      if (patterns.hasOwnProperty(pattern)) {
        var rx = new RegExp(pattern);
        if (rx.test(scriptfile.src)) {
          scriptfile.src = '';
        }
      }
    }
  }
}

