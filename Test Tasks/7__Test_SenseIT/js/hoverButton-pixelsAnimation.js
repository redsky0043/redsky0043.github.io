const allMainPixels = document.querySelectorAll('.main__pixel');
const allBottomPixels = document.querySelectorAll('.bottom__pixel');

const listClassesForApplyButton_main = [
    'first_pixel',
    'second_pixel',
    'third_pixel',
    'fourth_pixel',
    'fifth_pixel',
    'sixth_pixel',
    'seventh_pixel',
    'eighth_pixel',
    'nineth_pixel',
    'tenth_pixel',
    'eleventh_pixel',
];

const listClassesForApplyButton_bottom = [
    'twelfth_pixel',
    'thirteenth_pixel',
    'fourteenth_pixel',
    'fifteenth_pixel',
    'sixteenth_pixel',
    'seventeenth_pixel',
    'eighteenth_pixel',
];

const listClassesForJuryButton_main = [
    'first_pixel_2',
    'second_pixel_2',
    'third_pixel_2',
    'fourth_pixel_2',
    'fifth_pixel_2',
    'sixth_pixel_2',
    'seventh_pixel_2',
    'eighth_pixel_2',
    'nineth_pixel_2',
    'tenth_pixel_2',
    'eleventh_pixel_2',
];

const listClassesForJuryButton_bottom = [
    'twelfth_pixel_2',
    'thirteenth_pixel_2',
    'fourteenth_pixel_2',
    'fifteenth_pixel_2',
    'sixteenth_pixel_2',
    'seventeenth_pixel_2',
    'eighteenth_pixel_2',
];

btnApply.addEventListener('mouseover', () => {
    allMainPixels.forEach((item, i) => {
        item.classList.add(listClassesForApplyButton_main[i])
    });

    allBottomPixels.forEach((item, i) => {
        item.classList.add(listClassesForApplyButton_bottom[i])
    });
});

btnApply.addEventListener('mouseout', () => {
    allMainPixels.forEach((item, i) => {
        item.classList.remove(listClassesForApplyButton_main[i])
    });

    allBottomPixels.forEach((item, i) => {
        item.classList.remove(listClassesForApplyButton_bottom[i])
    });
});

btnJury.addEventListener('mouseover', () => {
    allMainPixels.forEach((item, i) => {
        item.classList.add(listClassesForJuryButton_main[i])
    });

    allBottomPixels.forEach((item, i) => {
        item.classList.add(listClassesForJuryButton_bottom[i])
    });
});

btnJury.addEventListener('mouseout', () => {
    allMainPixels.forEach((item, i) => {
        item.classList.remove(listClassesForJuryButton_main[i])
    });

    allBottomPixels.forEach((item, i) => {
        item.classList.remove(listClassesForJuryButton_bottom[i])
    });
});