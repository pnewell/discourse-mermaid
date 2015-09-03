(function() {

Discourse.Dialect.inlineBetween({
    start: '\[flowchart\]',
    stop: '\[\/flowchart\]',
    rawContents: true,
    emitter: function(contents) {
        return '<div class="mermaid">' + contents + "</div>";
    }
})
    
})();
