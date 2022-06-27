// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// Task 3
class pAequorFactory {
  constructor(specimenNum, dna) {
    this._specimenNum = specimenNum;
    this._dna = dna;
  }
  get specimenNum() {
    return this._specimenNum;
  }
  get dna() {
    return this._dna;
  }
  mutate() {
    let newDna = returnRandBase();
    while (newDna === this._dna){
      newDna = returnRandBase();
    }
    this._dna = newDna;  
  }
}

// Task 4


// Task 5


// Tests
const abc = new pAequorFactory(1, 'A');
console.log(abc.dna);
console.log(abc.specimenNum);
abc.mutate();
console.log(abc.dna);
