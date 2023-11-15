const Tap = {
  init: (
    accountId,
    createOptions = { integration: "npm-module" },
    createCallback,
    detectOptions = {},
    detectCallback
  ) => {
    if (window.tap) return;

    (function (t, a, p) {
      t.TapfiliateObject = a;
      t[a] =
        t[a] ||
        function () {
          (t[a].q = t[a].q || []).push(arguments);
        };
    })(window, "tap");

    const scriptSrc = "https://script.tapfiliate.com/tapfiliate.js";
    var script = document.createElement("script");
    script.src = scriptSrc;
    script.type = "text/javascript";
    script.async = true;

    document.getElementsByTagName("head")[0].appendChild(script);
    script.addEventListener("error", () => {
      new Error(`${scriptSrc} failed to load.`);
    });

    window.tap("create", accountId, createOptions, createCallback);
    window.tap("detect", detectOptions, detectCallback);
  }
};

export default Tap;
