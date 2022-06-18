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
    this.specimenNum = specimenNum;
    this.dna = dna;
  }
  mutate() {
    dna = returnRandBase();
  }
}

// Task 4
