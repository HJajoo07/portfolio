// Configuration for the Embedded Chatbot
window.embeddedChatbotConfig = {
    chatbotId: "QDAxG5Gl2KwFas-uDJywL",
    domain: "www.chatbase.co",
};

// Dynamically load the chatbot script
(function loadChatbot() {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.setAttribute("chatbotId", window.embeddedChatbotConfig.chatbotId);
    script.setAttribute("domain", window.embeddedChatbotConfig.domain);
    script.defer = true;
    document.body.appendChild(script);
})();

// Chatbot Toggle Button Functionality
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("chatbot-toggle");

    toggleButton.addEventListener("click", () => {
        const chatbotContainer = document.querySelector(".chatbot-container");
        if (chatbotContainer) {
            chatbotContainer.style.display =
                chatbotContainer.style.display === "none" || !chatbotContainer.style.display
                    ? "block"
                    : "none";
        } else {
            console.error("Chatbot container not found");
        }
    });
});
