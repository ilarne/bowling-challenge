describe("Fizzbuzz", function() {
  it("Return fizz with 3", function() {
    expect(fizzBuzz(3)).toEqual("fizz");
  });

  it("Return buzz with 5", function() {
    expect(fizzBuzz(5)).toEqual("buzz");
  });

  it("Returns fizzbuzz with 15", function() {
    expect(fizzBuzz(15)).toEqual('fizzbuzz');
  });

  it("Returns 4 with 4", function() {
    expect(fizzBuzz(4)).toEqual(4);
  });

  it("Returns fizz with 6", function() {
    expect(fizzBuzz(6)).toEqual('fizz');
  });

  it("Return buzz with 10", function() {
    expect(fizzBuzz(10)).toEqual('buzz');
  });

  it("Returns fizzbuzz with 30", function() {
    expect(fizzBuzz(30)).toEqual('fizzbuzz');
  });
});


// describe "Fizzbuzz" do
//   it 'returns fizz' do
//     expect(fizzbuzz(3)).to eq 'fizz'
//   end
// end
