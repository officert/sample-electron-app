'use strict';

const childProcess = require('child_process');
const electron = require('electron-prebuilt');
const electronPackager = require('electron-packager');
const gulp = require('gulp');

gulp.task('run', next => {
  var child = childProcess.spawn(electron, ['./']);

  child.stdout.on('data', (data) => {
    console.log(`tail output: ${data}`);
  });

  child.on('exit', (exitCode) => {
    console.log('Child exited with code: ' + exitCode);
    return next(exitCode === 1 ? new Error('Error running run task') : null);
  });
});
