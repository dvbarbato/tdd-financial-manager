test('Devo conhecer as principais assertivas do jest', () => {
    let number = null;
    expect(number).toBeNull();
    // eslint-disable-next-line no-const-assign
    number = 10;
    expect(number).not.toBeNull();
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
});

test('Devo saber trabalhar com objeto', () => {
    const obj = { name: 'Jonh', email: 'j@email.com' };
    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('name', 'Jonh');
    expect(obj.name).toBe('Jonh');

    const obj2 = { name: 'Jonh', email: 'j@email.com' };
    expect(obj).toEqual(obj2);
    expect(obj).toBe(obj);
});
