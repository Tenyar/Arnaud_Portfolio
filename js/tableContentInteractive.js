document.addEventListener('DOMContentLoaded', function() {
    // Select all table of content links
    const tocLinks = document.querySelectorAll('.side_table_content .scroll_to');
    // Array to store corresponding sections
    const sections = [];

    // Loop through each link
    tocLinks.forEach(link => {
        // Get the section ID from data-link attribute
        const sectionId = link.getAttribute('data-link');
        // Find the section element with the corresponding ID
        const section = document.getElementById(sectionId);
        if (section) {
            // Add section to the sections array
            sections.push(section);
        }

        // Add click event listener for smooth scrolling
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            section.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section smoothly
        });
    });

    // Function to highlight the current section link
    function highlightSection() {
        // Get current scroll position
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        // Offset value to determine when to highlight the section
        //let offset = window.innerHeight / 2; // Adjust this value if necessary
        let offset = 150;
        // Initialize index to the number of sections
        let index = sections.length;
        // Loop backwards through sections to find the current section
        while (--index && scrollPosition + offset < sections[index].offsetTop) {}

        // Remove 'active' class from all links
        tocLinks.forEach(link => link.classList.remove('active-table-content-link'));
        // Add 'active' class to the current link
        if (index >= 0) {
            tocLinks[index].classList.add('active-table-content-link');
        }
    }

    // Add scroll event listener to window
    window.addEventListener('scroll', highlightSection);
    // Initial call to highlight the section on page load
    highlightSection();
});