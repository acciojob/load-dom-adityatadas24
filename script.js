//your JS code here. If required.
	 function domloaded() {
		 const messageDiv = document.getElementById("message");

            // Create a text node containing the message
            const textNode = document.createTextNode("DOM load success");

            // Append the text node to the message div
            messageDiv.appendChild(textNode);

          
    }
   document.addEventListener("DOMContentLoaded", domLoaded);
      
