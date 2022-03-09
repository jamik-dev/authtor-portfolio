class ImportScript {}
export default ImportScript = new ImportScript()

export function importJs(src, async = false) {
    let plugin = document.createElement("script");
    plugin.setAttribute("src", src);
    plugin.async = async;
    document.head.appendChild(plugin);
}

export function importCss(src) {
    let plugin = document.createElement("link");
    plugin.setAttribute("href", src);
    plugin.rel = "stylesheet";
    plugin.type = "text/css";
    document.head.appendChild(plugin);
}

export function removeJs(src) {
    document.querySelectorAll("script[src='" + src + "']").forEach(element => {
        element.remove();
    });
}

export function removeCss(src) {
    document.querySelectorAll("link[href='" + src + "']").forEach(element => {
        element.remove();
    });
}