const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * Hàm tải template
 *
 * Cách dùng:
 * <div id="parent"></div>
 * <script>
 *  load("#parent", "./path-to-template.html");
 * </script>
 */
function load(selector, path) {
    const cached = localStorage.getItem(path);
    if (cached) {
        $(selector).innerHTML = cached;
    }

    fetch(path)
        .then((res) => res.text())
        .then((html) => {
            if (html !== cached) {
                $(selector).innerHTML = html;
                localStorage.setItem(path, html);
            }
        })
        .finally(() => {
            window.dispatchEvent(new Event("template-loaded"));
        });
}

// Button thả tim
window.onload = function () {
    console.log($(".like-btn"));

    let btnLikes = document.getElementsByClassName("like-btn");
    for (let index = 0; index < btnLikes.length; index++) {
        const element = btnLikes[index];
        element.onclick = function () {
            console.log();
            let check = Array.from(this.classList).includes("like-btn--liked");
            if (check) {
                this.classList.remove("like-btn--liked");
            } else {
                this.classList.add("like-btn--liked");
            }
        };
    }
};

// Chuyển tab Fashion list
window.addEventListener("template-loaded", () => {
    const tabsSelector = "pro-list__item";
    const contentsSelector = "prod-container";

    const tabActive = `${tabsSelector}--active`;
    const contentActive = `${contentsSelector}--active`;

    const tabContainers = $$(".js-tabs");
    tabContainers.forEach((tabContainer) => {
        const tabs = tabContainer.querySelectorAll(`.${tabsSelector}`);
        const contents = tabContainer.querySelectorAll(`.${contentsSelector}`);
        tabs.forEach((tab, index) => {
            tab.onclick = () => {
                tabContainer
                    .querySelector(`.${tabActive}`)
                    ?.classList.remove(tabActive);
                tabContainer
                    .querySelector(`.${contentActive}`)
                    ?.classList.remove(contentActive);
                tab.classList.add(tabActive);
                contents[index].classList.add(contentActive);
            };
        });
    });
});

// Chuyển tab feedback electronic
window.addEventListener("template-loaded", () => {
    const tabsSelector = "feedback-list__item";
    const contentsSelector = "feedback-containers";

    const tabActive = `${tabsSelector}--active`;
    const contentActive = `${contentsSelector}--active`;

    const tabContainers = $$(".js-tabs");
    tabContainers.forEach((tabContainer) => {
        const tabs = tabContainer.querySelectorAll(`.${tabsSelector}`);
        const contents = tabContainer.querySelectorAll(`.${contentsSelector}`);
        tabs.forEach((tab, index) => {
            tab.onclick = () => {
                tabContainer
                    .querySelector(`.${tabActive}`)
                    ?.classList.remove(tabActive);
                tabContainer
                    .querySelector(`.${contentActive}`)
                    ?.classList.remove(contentActive);
                tab.classList.add(tabActive);
                contents[index].classList.add(contentActive);
            };
        });
    });
});

// Chuyển tab prod Furniture
window.addEventListener("template-loaded", () => {
    const tabsSelector = "pro-list-furniture__item";
    const contentsSelector = "prod-container";

    const tabActive = `${tabsSelector}--active`;
    const contentActive = `${contentsSelector}--active`;

    const tabContainers = $$(".js-tabs");
    tabContainers.forEach((tabContainer) => {
        const tabs = tabContainer.querySelectorAll(`.${tabsSelector}`);
        const contents = tabContainer.querySelectorAll(`.${contentsSelector}`);
        tabs.forEach((tab, index) => {
            tab.onclick = () => {
                tabContainer
                    .querySelector(`.${tabActive}`)
                    ?.classList.remove(tabActive);
                tabContainer
                    .querySelector(`.${contentActive}`)
                    ?.classList.remove(contentActive);
                tab.classList.add(tabActive);
                contents[index].classList.add(contentActive);
            };
        });
    });
});
