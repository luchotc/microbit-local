(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/microbit-local/",
    "workerjs": "/microbit-local/worker.js",
    "tdworkerjs": "/microbit-local/tdworker.js",
    "monacoworkerjs": "/microbit-local/monacoworker.js",
    "pxtVersion": "0.19.16",
    "pxtRelId": "",
    "pxtCdnUrl": "/microbit-local/",
    "commitCdnUrl": "/microbit-local/",
    "blobCdnUrl": "/microbit-local/",
    "cdnUrl": "/microbit-local/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "simUrl": "/microbit-local/simulator.html",
    "partsUrl": "/microbit-local/siminstructions.html",
    "runUrl": "/microbit-local/run.html",
    "docsUrl": "/microbit-local/docs.html",
    "isStatic": true
};

    var scripts = [
        "/microbit-local/highlight.js/highlight.pack.js",
        "/microbit-local/bluebird.min.js",
        "/microbit-local/typescript.js",
        "/microbit-local/semantic.js",
        "/microbit-local/marked/marked.min.js",
        "/microbit-local/lzma/lzma_worker-min.js",
        "/microbit-local/blockly/blockly_compressed.js",
        "/microbit-local/blockly/blocks_compressed.js",
        "/microbit-local/blockly/msg/js/en.js",
        "/microbit-local/pxtlib.js",
        "/microbit-local/pxtcompiler.js",
        "/microbit-local/pxtblocks.js",
        "/microbit-local/pxteditor.js",
        "/microbit-local/pxtsim.js",
        "/microbit-local/target.js",
        "/microbit-local/pxtrunner.js"
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/microbit-local/jquery.js")

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
