import shifts from '../redux/reducers/shifts';

test('Shifts reducer should be an empty array by default.', () => {
    const returnState = shifts(undefined, { type: undefined });

    expect(Array.isArray(returnState)).toBe(true);
    expect(returnState).toEqual([]);
});

test('Shifts reducer should SET_SHIFTS to payload.', () => {
    const inputShifts = ['shift1', 'shift2', 'shift3'];
    const returnState = shifts(undefined, { type: 'SET_SHIFTS', payload: inputShifts });

    expect(Array.isArray(returnState)).toBe(true);
    expect(returnState.length).toBe(inputShifts.length);
    expect(returnState).toBe(inputShifts);
});

test('Shifts reducer should IGNORE actions unknown type.', () => {
    const initialShifts = ['shift1', 'shift2', 'shift3'];
    const inputShifts = ['shift4', 'shift5', 'shift6'];
    const returnState = shifts(initialShifts, { type: 'IGNORE', payload: inputShifts });
    
    expect(Array.isArray(returnState)).toBe(true);
    expect(returnState.length).toBe(initialShifts.length);
    expect(returnState).toBe(initialShifts);
});