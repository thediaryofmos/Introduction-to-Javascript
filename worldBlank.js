function worldBlank(noun, adjective, verb, adverb){
    var result = ""
    result += "The "+ adjective + " " + noun + " " + verb + " " + "for his country" + " " + adverb;
    return result;
}

console.log(worldBlank("Osama", "Intelligent", "work", "purposefully"));
console.log(worldBlank("Arslan", "Dumb", "lays off", "sadly"));