var path = require("path");
const fs = require("fs");

const sourceDir = "src";
const replaceDir = "custom";

class CustomResolverPlugin {
  constructor(source, target) {
    this.source = source || "resolve";
    this.target = target || "resolve";
  }

  apply(resolver) {
    const target = resolver.ensureHook(this.target);
    resolver
      .getHook(this.source)
      .tapAsync("MyResolverPlugin", (request, resolveContext, callback) => {
        if (
          !request.context.issuer.includes("node_modules") &&
          request.context.issuer.includes(sourceDir)
        ) {
          if (request.request[0] === ".") {
            console.log(request);
            request.request = path.format({
              dir: request.path,
              base: request.request.substr(2),
            });
            let customPath = request.request.replace(sourceDir, replaceDir);
            customPath = filenameWithExtension(customPath);
            console.log({ customPath });
            if (fs.existsSync(customPath)) {
              request.request = customPath;
              console.log("replaced");
            }
            console.log(request);
            resolver.doResolve(target, request, null, resolveContext, callback);
          }
        }
        callback();
      });
  }
}

function filenameWithExtension(filename) {
  return filename.includes(".") ? filename : filename + ".jsx";
}

module.exports = CustomResolverPlugin;
