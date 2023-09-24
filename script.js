//your JS code here. If required.
	 function onDOMLoad() {
            var textNode = document.createTextNode("DOM load success");
            var body = document.body;
            while (body.firstChild) {
                body.removeChild(body.firstChild);
            }
            body.appendChild(textNode);
        }
        document.addEventListener("DOMContentLoaded", onDOMLoad);
