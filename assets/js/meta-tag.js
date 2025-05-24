
// Define meta content for each service
const serviceMeta = {
    "iphone-repair": {
        title: "iPhone Repair | Fix@Anywhere - Screen & Battery Replacement",
        description: "On-site iPhone screen & battery repair. We come to you! Apple-certified parts with warranty.",
        keywords: "iPhone repair, screen replacement, Fix@Anywhere iPhone service, on-site Apple repair, iPhone battery replacement"
    },
    "android-repair": {
        title: "Android Repair | Fix@Anywhere - Samsung, Pixel, OnePlus",
        description: "Fix@Anywhere Android experts! Screen, battery & software issues fixed at your home or office.",
        keywords: "Android repair, Samsung repair, doorstep phone fix, Pixel screen replacement, OnePlus charging port repair"
    },
    "macbook-repair": {
        title: "MacBook Repair | Fix@Anywhere - On-Site Apple Laptop Service",
        description: "Broken MacBook? We come to you! Keyboard, screen, battery, and logic board repairs with genuine parts.",
        keywords: "MacBook repair, Apple laptop service, Fix@Anywhere Mac repair, on-site MacBook screen replacement"
    },
    "pc-repair": {
        title: "PC Repair | Fix@Anywhere - On-Site Desktop Computer Service",
        description: "No need to carry your PC! Fix@Anywhere technicians troubleshoot and repair desktops at your location.",
        keywords: "PC repair, computer repair service, Fix@Anywhere desktop repair, on-site computer troubleshooting"
    },
    "pc-hardware-repair": {
        title: "PC Hardware Repair | Fix@Anywhere - Component-Level Fixes",
        description: "Motherboard, GPU, or hard drive issues? We repair internal PC components at your doorstep.",
        keywords: "PC hardware repair, motherboard repair, Fix@Anywhere component service, on-site RAM/SSD upgrade"
    },
    "software-services": {
        title: "Software Services | Fix@Anywhere - On-Site & Remote Support",
        description: "Virus removal, OS installation, data recovery – solved at your location or via secure remote connection.",
        keywords: "computer software repair, virus removal, Fix@Anywhere tech support, Windows installation, data recovery"
    }
};

// Update meta tags when a section is visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (serviceMeta[sectionId]) {
                document.title = serviceMeta[sectionId].title;
                document.querySelector('meta[name="description"]').content = serviceMeta[sectionId].description;
                document.querySelector('meta[name="keywords"]').content = serviceMeta[sectionId].keywords;

                // Update OpenGraph (for social media sharing)
                document.querySelector('meta[property="og:title"]').content = serviceMeta[sectionId].title;
                document.querySelector('meta[property="og:description"]').content = serviceMeta[sectionId].description;
                document.querySelector('meta[property="og:url"]').content = `https://phone-fix.in/#${sectionId}`;
            }
        }
    });
}, { threshold: 0.5 });

// Observe all service sections
document.querySelectorAll('.service-section').forEach(section => {
    observer.observe(section);
});