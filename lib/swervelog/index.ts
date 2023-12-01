import createLogFile from './fileHandler';

const logFile: Object = createLogFile('');
if (logFile.responseType === 'erorr') { console.log('There was an error.')}