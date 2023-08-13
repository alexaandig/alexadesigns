// Default Gulp Task
exports.default = series(cssTask, jsTask, browserSyncServe, watchTask);

//Build Gulp Task
exports.build = series(cssTask, jsTask);