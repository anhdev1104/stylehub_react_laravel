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

// Chuyển tab Fashion
window.addEventListener("template-loaded", () => {
    const tabsSelector = "prod-list__item";
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

// Chuyển tab Product
window.addEventListener("template-loaded", () => {
    const tabsSelector = "product-left__item";
    const contentsSelector = "product-container";

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

// Chuyển tab Product Small
window.addEventListener("template-loaded", () => {
    const tabsSelector = "product-left__item-small";
    const contentsSelector = "product-container";

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

// Chuyển tab Product Detail
window.addEventListener("template-loaded", () => {
    const tabsSelector = "product-detail__img-small";
    const contentsSelector = "product-detail__img";

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

/**
 * JS toggle
 *
 * Cách dùng:
 * <button class="js-toggle" toggle-target="#box" >Click</button>
 * <div id="box">Content show/hide</div>
 */
window.addEventListener("template-loaded", initJsToggle);

function initJsToggle() {
    $$(".js-toggle").forEach((button) => {
        const target = button.getAttribute("toggle-target");
        if (!target) {
            document.body.innerText = `Cần thêm toggle-target cho: ${button.outerHTML}`;
        }
        button.onclick = (e) => {
            e.preventDefault();

            if (!$(target)) {
                return (document.body.innerText = `Không tìm thấy phần tử "${target}"`);
            }
            const isHidden = $(target).classList.contains("hide");

            requestAnimationFrame(() => {
                $(target).classList.toggle("hide", !isHidden);
                $(target).classList.toggle("show", isHidden);
            });
        };
        document.onclick = function (e) {
            if (!e.target.closest(target)) {
                const isHidden = $(target).classList.contains("hide");
                if (!isHidden) {
                    button.click();
                }
            }
        };
    });
}

window.addEventListener("template-loaded", () => {
    const links = $$(".js-dropdown-list > li > a");

    links.forEach((link) => {
        link.onclick = () => {
            if (window.innerWidth > 991) return;
            const item = link.closest("li");
            item.classList.toggle("navbar__item--active");
        };
    });
});

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

// Slide Show
// Cách dùng thêm class="mySlides" vào các slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[slideIndex - 1].style.display = "block";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    // Điều chỉnh thông số chạy slide theo giây(ms)
    setTimeout(showSlides, 5000);
}

// Active
const ul = document.querySelector(".product-select__box-wrap");

ul.addEventListener("click", (e) => {
    e.preventDefault();
    let li = e.target.closest(".product-select__size");
    if (li) {
        ul.querySelectorAll(".product-select__size").forEach((elm) =>
            elm.classList.remove("--active")
        );
        li.classList.add("--active");
    }
});
