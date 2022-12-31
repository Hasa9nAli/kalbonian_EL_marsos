# Objects & Primitive Values
Objects are <b>reference values</b> - you learned that.

It might not have been obvious yet but it's also important to recognize that, in the end, <b>objects are of course made up of primitive values.</b>

Here's an example:
```
const complexPerson = {
    name: 'Max',
    hobbies: ['Sports', 'Cooking'],
    address: {
        street: 'Some Street 5',
        stateId: 5,
        country: 'Germany',
        phone: {
            number: 12 345 678 9,
            isMobile: true
        }
    },
};
```
Event though <b>complexPerson</b> has multiple nested reference values (nested arrays and objects), you end up with primitive values if you drill into the object.

<b>name</b> holds a string (<b>'Max'</b>) => Primitive value

<b>hobbies</b> holds an array (i.e. a reference value) which is full of strings (<b>'Sports'</b>, <b>'Cooking'</b>) => <b>Primitive values</b>

<b>address</b> holds an object which in turn holds a mixture of primitive values like <b>'Some Street 5'</b> and nested objects (phone), but if you dive into <b>phone</b>, you find only numbers and booleans in there => <b>Primitive values</b>

So you could say:<b> Primitive</b> values are the <b>core building blocks</b> that hold your data, <b>objects (and arrays)</b> are helpful for <b>organizing</b> and <b>working</b> with that data.

Play