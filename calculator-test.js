
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 500, years: 3, rate: 5})).toEqual('14.99');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 542.9832399, years: 3, rate: 5})).toEqual('16.27');
});

/// etc
