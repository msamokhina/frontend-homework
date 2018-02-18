'use strict';

QUnit.module('Тестируем функцию solve', function () {
    QUnit.test('solve работает правильно для положительных x', function (assert) {
        assert.strictEqual(solve('x + 1', 1), 2);
        assert.strictEqual(solve('2 + x - 1', 5), 6);
        assert.strictEqual(solve('2 * x - 1', 5), 9);
        assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
        assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
        assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
    });

    QUnit.test('solve работает правильно для отрицательных x', function (assert) {
        assert.strictEqual(solve('x + 1', -3), -2);
        assert.strictEqual(solve('(4 + x) * 3', -5), -3);
        assert.strictEqual(solve('2 * x - (x + 3)', -6), -9);
    });

    QUnit.test('solve работает правильно для x = 0', function (assert) {
        assert.strictEqual(solve('((5 - x) * (x + 5)) * 2', 0), 50);
        assert.strictEqual(solve('2 + x - 1 * x + 10', 0), 12);
    });
});
