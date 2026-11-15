// Safe check for About page highlight button
const highlightBtn = document.querySelector("#highlightBtn");
if (highlightBtn) {
    const personalDetails = document.querySelectorAll(".personal-detail, .favcolor");
    highlightBtn.addEventListener("click", function() {
        personalDetails.forEach(function(cell) {
            cell.classList.toggle("highlight-detail");
        });
    });
}

// Safe check for text size button
const textSizeBtn = document.querySelector("#textSizeBtn");
if (textSizeBtn) {
    const allParagraphs = document.querySelectorAll("p");
    textSizeBtn.addEventListener("click", function() {
        allParagraphs.forEach(function(p) {
            p.classList.toggle("large-text");
        });
    });
}

// Link inspector functionality for index.html
document.addEventListener("DOMContentLoaded", function() {
    const checkLinksBtn = document.getElementById("check-links-btn");
    const linkInfoDisplay = document.getElementById("link-info");

    if (checkLinksBtn && linkInfoDisplay) {
        checkLinksBtn.addEventListener("click", function() {
            const navLinks = document.querySelectorAll("#topmenu a");
            let output = "Navigation Link Attributes: ";

            navLinks.forEach(function(link) {
                const text = link.textContent;
                const href = link.getAttribute("href");
                output += `[${text} -> ${href}] `;
            });

            linkInfoDisplay.textContent = output;
        });
    }
});

// Window resize dimensions feature
document.addEventListener("DOMContentLoaded", function() {
    const dimensionDisplay = document.querySelector("#window-dimensions");

    if (dimensionDisplay) {
        function updateWindowDimensions() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            dimensionDisplay.textContent = width + "px (width) x " + height + "px (height)";
        }

        // Run immediately when the page loads
        updateWindowDimensions();

        // Update dynamically whenever the browser window is resized
        window.addEventListener("resize", updateWindowDimensions);
    }
});

// Current date and time feature
document.addEventListener("DOMContentLoaded", function() {
    const datetimeDisplay = document.getElementById("current-datetime");

    if (datetimeDisplay) {
        function updateDateTime() {
            const now = new Date();
            // Formats it neatly (e.g., date and local time string)
            datetimeDisplay.textContent = now.toLocaleString();
        }

        // Run immediately on load
        updateDateTime();

        // Update every second to keep the clock ticking live
        setInterval(updateDateTime, 1000);
    }
});

// Dynamic hover effect for bold text via JavaScript (Condition 4/5 support)
document.addEventListener("DOMContentLoaded", function() {
    const boldElements = document.querySelectorAll("b, strong");

    boldElements.forEach(function(el) {
        el.addEventListener("mouseenter", function() {
            el.style.backgroundColor = "yellow";
        });
        el.addEventListener("mouseleave", function() {
            el.style.backgroundColor = "transparent";
        });
    });
});