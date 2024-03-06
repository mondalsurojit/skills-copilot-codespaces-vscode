
function skillsMember(){
    let member = {
        name: 'John',
        age: 25,
        skills: ['HTML', 'CSS', 'JS'],
        greet: function(){
            console.log('Hello, my name is ' + this.name);
        }
    };
    return member;
}