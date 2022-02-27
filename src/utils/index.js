// https://stackoverflow.com/questions/8495687/split-array-into-chunks

export const chunk = (array, chunkSize) => {
    const arr = [];
    for (let i = 0; i < array.length; i += chunkSize) arr.push(array.slice(i, i + chunkSize));
    return arr;
};

export const randomString = (length = 7) => {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export const slugify = str => {
    str = str.replace(/^\s+||\s+$/g, '');

    // string LowerCase
    str = str.toLowerCase();

    // Remove accents, swap
    const from = 'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;';
    const to = 'AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------';
    for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    // Remove invalid chars
    str = str
        .replace(/[^a-z0-9 -]/g, '')
        // collpase whitespace and replace by -
        .replace(/\s+/g, '-')
        // Collapse dashes
        .replace(/-+/g, '-');

    return str;
};

export const randomIndex = length => {
    return Math.floor(Math.random() * length);
};

export const randomElement = (array, length = 1) => {
    // Shffle array
    const shuffeld = array.sort(() => 0.5 - Math.random());

    let selected = shuffeld.slice(0, length);

    return selected;
};

export const isElementInViewPort = el => {
    const rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */ &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
};
