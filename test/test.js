//packages
const ansiToUnicodeConverter = require('../');

//constants
const ANSI_SAMPLE = '²Ýáõß';
const ANSI_SAMPLE_CONVERTED_TO_UNICODE = 'Անուշ';

//tests
describe('simple test', () => {
    it('ansi to unicode', function (done) {
        const ansiToUnicode = ansiToUnicodeConverter.toUnicode(ANSI_SAMPLE);

        if (ansiToUnicode !== ANSI_SAMPLE_CONVERTED_TO_UNICODE) {
            return done(new Error(`The data "${ANSI_SAMPLE}" didn't have been converted correctly. Result: "${ansiToUnicode}"`));
        }

        done();
    });

    it('ansi to unicode and back', function (done) {
        const ansiToUnicode = ansiToUnicodeConverter.toUnicode(ANSI_SAMPLE);
        const ansiToUnicodeToAnsi = ansiToUnicodeConverter.toAnsi(ansiToUnicode);

        if (ansiToUnicodeToAnsi !== ANSI_SAMPLE) {
            return done(new Error(`The data "${ANSI_SAMPLE}" didn't have been converted correctly to it's initial value. Result: "${ansiToUnicode}"`));
        }

        done();
    });
});
