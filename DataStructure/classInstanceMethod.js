class Student {
    constructor(firstName, lastName, grade) {
        this.firstName = firstName
        this.lastName = lastName
        this.grade = grade
        this.tardies = 0
        this.scores = []
    }

    StudentData(){
        console.log(`${this.firstName} ${this.lastName}, is a student of oxford university`)
    }

    markLate(){
        this.tardies += 1
        if(this.tardies >= 3){
            return 'YOU ARE EXPELLED'
        }
        console.log(`${this.firstName} ${this.lastName} has been late ${this.tardies} times`)
    }

    calculateAverage(){
        let sum = this.scores.reduce(function(a, b) {return a + b})
        return sum / this.scores.length
    }

    addScores(score){
        this.scores.push(score)
        return this.scores
    }

    static EnrollStudent(){
        return 'ENROLL STUDENT'
    }
}