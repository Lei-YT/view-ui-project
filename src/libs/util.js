let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : '残联';
    window.document.title = title;
};

export default util;
