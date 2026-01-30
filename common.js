document.addEventListener('DOMContentLoaded', () => {
    scrollIfUrlHashExists();
    setMenuToggleEvListener();
    setAboutUsEvListener();
    setClassProgramEventListeners();
    setInstructorBioEventListeners();
    setClassScheduleEventListeners();
    setValPhilEventListeners()
});

function scrollIfUrlHashExists() {
    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            window.scrollBy(0, -155);
        }
    }
}

function setMenuToggleEvListener() {
    const menuToggle = document.getElementById('nav_menu_toggle');
    const mainHeaderContainer = document.getElementById('main_header_container');

    menuToggle.addEventListener('click', () => {
        mainHeaderContainer.classList.toggle('nav-collapsed');
        mainHeaderContainer.classList.toggle('nav-expanded');
    });
}

function setAboutUsEvListener() {
    const aboutUsItem = document.getElementById('about_us_item');
    const aboutUsDiv = document.getElementById('about_us_div');

    aboutUsDiv.addEventListener('click', () => {
        aboutUsItem.classList.toggle('collapsed');
        aboutUsItem.classList.toggle('expanded');
    });
}

function setClassProgramEventListeners() {
    const classProgramDivs = document.querySelectorAll('.class-program-div');

    classProgramDivs.forEach((div) => {
        div.addEventListener('click', () => {
            div.classList.toggle('expanded');
        });
    });
}

function setInstructorBioEventListeners() {
    const instructorCardElms = document.querySelectorAll('.instructor-card-div');

    instructorCardElms.forEach((elm) => {
        elm.addEventListener('click', () => {
            elm.classList.toggle('collapsed');
            elm.classList.toggle('expanded');
        });
    });
}

function setClassScheduleEventListeners() {
    const classScheduleToggleElms = document.querySelectorAll('.schedule-toggle-button');

    classScheduleToggleElms.forEach((div) => {
        div.addEventListener('click', () => {
            const thisToggle = div;
            if (!thisToggle.classList.contains('active')) {
                thisToggle.classList.add('active');
                const otherToggle = document.querySelector(`.schedule-toggle-button:not(#${thisToggle.id})`);
                if (otherToggle) {
                    otherToggle.classList.remove('active');
                }
                const scheduleType = thisToggle.getAttribute('data-schedule-type');
                const relatedScheduleTable = document.querySelector(`.schedule-table[data-schedule-type="${scheduleType}"]`);
                if (relatedScheduleTable) {
                    relatedScheduleTable.classList.remove('hidden');
                    const otherScheduleTable = document.querySelector(`.schedule-table:not([data-schedule-type="${scheduleType}"])`);
                    if (otherScheduleTable) {
                        otherScheduleTable.classList.add('hidden');
                    }
                }
            }
        });
    });
}

// valPhil stands for values and philosophy
function setValPhilEventListeners() {
    const valPhilCollContentElms = document.querySelectorAll('.val-phil-collapsible-content-div');

    valPhilCollContentElms.forEach((elm) => {
        elm.addEventListener('click', () => {
            elm.classList.toggle('collapsed');
            elm.classList.toggle('expanded');
        });
    });
}