// Type assertion is needed when the variable wasn't initialized with a type. 
// Ex:
//    let message: string;
// or
//    let message = 'abc';
var message;
message = 'abc';
// This kind of type assertion is more used 
var ensWithC = message.endsWith('c');
// This is equivalent, but not so popular
var alternativeWay = message.endsWith('c');
// Both solutions will not change dynamically the variable type at run-time.
// It will only help the compiler to handle the information as a given type
// and the IDE variable type assistance. 
