const allMainPixels = document.querySelectorAll('.main__pixel');
const allBottomPixels = document.querySelectorAll('.bottom__pixel');

const listClassesForApplyBottom = [
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
    'twelfth_pixel',
    'thirteenth_pixel',
    'fourteenth_pixel',
    'fifteenth_pixel',
    'sixteenth_pixel',
    'eighteenth_pixel',
];

const listClassesForJuryBottom = [
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
    'twelfth_pixel_2',
    'thirteenth_pixel_2',
    'fourteenth_pixel_2',
    'fifteenth_pixel_2',
    'sixteenth_pixel_2',
    'eighteenth_pixel_2',
];

// const addClassesForApplyBottom = allMainPixels.forEach((item, i) => {
//     item.classList.add(listClassesForApplyBottom[i])
// });

// const removeClassesForApplyBottom = allMainPixels.forEach((item, i) => {
//     item.classList.add(listClassesForApplyBottom[i])
// });

btnApplication.addEventListener('mouseover', () => {
    allMainPixels.forEach((item, i) => {
        item.classList.add(listClassesForApplyBottom[i])
    });
});

btnApplication.addEventListener('mouseout', () => {
    allMainPixels.forEach((item, i) => {
        item.classList.remove(listClassesForApplyBottom[i])
    });
});

btnJury.addEventListener('mouseover', () => {
    allMainPixels.forEach((item, i) => {
        item.classList.add(listClassesForJuryBottom[i])
    });
});

btnJury.addEventListener('mouseout', () => {
    allMainPixels.forEach((item, i) => {
        item.classList.remove(listClassesForJuryBottom[i])
    });
});


