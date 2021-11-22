const {expect} = require('@jest/globals');
const {validateConfig} = require('../validateConfig');
const {currentConfig} = require('../parseConfig')


describe('Test validateConfig', () => {
    test('validateConfig("A-C1-C1-R0") should return an array', () => {
        expect(validateConfig('A-C1-C1-R0')).toEqual(['A','C1','C1','R0'])
    })
    test('validateConfig without arguments should exit with code 2', () => {

        const mockExit = jest.spyOn(process, 'exit')
        .mockImplementation((number) =>{ throw new Error('process.exit: ' + number);});

        expect(() => { validateConfig() }).toThrow();

        expect(mockExit).toHaveBeenCalledWith(2);
        mockExit.mockRestore();
    })

    test('validateConfig with an incorrect config should exit with code 3', () => {

        const mockExit = jest.spyOn(process, 'exit')
        .mockImplementation((number) =>{ throw new Error('process.exit: ' + number);});

        expect(() => { validateConfig('A1-A0') }).toThrow();

        expect(mockExit).toHaveBeenCalledWith(3);
        mockExit.mockRestore();
    })
})

describe('Test parseConfig', () => {

    test('parseConfig with duplicated config should return error message', () => {
        
        const mockStdErr = jest.spyOn(process.stderr, '_write')
        .mockImplementation((errorMessage) =>{ throw new Error('Error: ' + errorMessage);});

        expect(() => { 
            currentConfig(['-c', 'A-A-A', '-c', 'R0-R1'])
         }).toThrow();

        expect(mockStdErr).toHaveBeenCalledWith('You provided -c argument more than once.');
        mockStdErr.mockRestore();
    })
})