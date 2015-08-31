import {
    expect
} from 'chai';

import {
    CLIEngine
} from 'eslint';

describe(`eslintrc`, () => {
    it(`is valid`, () => {
        let cli;

        cli = new CLIEngine({
            useEslintrc: false,
            configFile: `./eslintrc.json`
        });

        expect(cli.executeOnText(``).errorCount).to.equal(0);
    });
});
